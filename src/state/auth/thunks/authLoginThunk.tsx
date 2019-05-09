import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import { authLoginFetchStart } from "../actions/AuthLoginFetchStart";
import axios from "axios";
import { ApiAccessTokenRequest, ApiSuccessfulResponse } from "@radoslaw-medryk/bank-core-shared";
import { AuthLoginFetchStateData } from "../state";
import { configPromise } from "src/config";
import { authLoginFetchSuccess } from "../actions/AuthLoginFetchSuccess";
import { authLoginFetchError } from "../actions/AuthLoginFetchError";
import { setTokenThunk } from "./setTokenThunk";
import { loginApiErrorsThunk } from "src/state/ui/thunks/loginApiErrorsThunk";
import { AppState } from "src/state/store";

export const authLoginThunk = (email: string, password: string) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const currentLoginFetch = getState().auth.loginFetch;
        if (currentLoginFetch && currentLoginFetch.status === "loading") {
            return;
        }

        const fetchId = uniqueId();
        dispatch(setTokenThunk(undefined, undefined, undefined));
        dispatch(authLoginFetchStart(fetchId));

        try {
            const request: ApiAccessTokenRequest = {
                email: email,
                password: password,
            };

            const { apiBaseUrl } = await configPromise;
            const response = await axios.post<ApiSuccessfulResponse<AuthLoginFetchStateData>>(
                "/api/v1/access/token",
                request,
                {
                    baseURL: apiBaseUrl,
                }
            );

            dispatch(authLoginFetchSuccess(fetchId, response.data.data));

            const { token, expiresInSec, profile } = response.data.data;

            const expirationBufferSec = 5 * 60; // 5min
            const expiresAt = new Date();
            expiresAt.setSeconds(expiresAt.getSeconds() + expiresInSec - expirationBufferSec);

            dispatch(setTokenThunk(token, expiresAt, profile.email.toLocaleLowerCase()));
        } catch (e) {
            dispatch(authLoginFetchError(fetchId, e.toString()));
            dispatch(loginApiErrorsThunk(e));
        }
    };
};
