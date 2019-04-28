import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import { authLoginFetchStart } from "../actions/AuthLoginFetchStart";
import axios from "axios";
import { ApiAccessTokenRequest, ApiSuccessfulResponse } from "@radoslaw-medryk/bank-core-shared";
import { AuthLoginFetchStateData } from "../state";
import { appConfig } from "src/config";
import { authLoginFetchSuccess } from "../actions/AuthLoginFetchSuccess";
import { authLoginFetchError } from "../actions/AuthLoginFetchError";
import { setTokenThunk } from "./setTokenThunk";

export const authLoginThunk = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        const fetchId = uniqueId();
        dispatch(setTokenThunk(undefined, undefined));
        dispatch(authLoginFetchStart(fetchId));

        try {
            const request: ApiAccessTokenRequest = {
                email: email,
                password: password,
            };

            const response = await axios.post<ApiSuccessfulResponse<AuthLoginFetchStateData>>(
                "/api/v1/access/token",
                request,
                {
                    baseURL: appConfig.apiBaseUrl,
                }
            );

            dispatch(authLoginFetchSuccess(fetchId, response.data.data));

            const expirationBufferSec = 5 * 60; // 5min
            const { token, expiresInSec } = response.data.data;
            const expiresAt = new Date();
            expiresAt.setSeconds(expiresAt.getSeconds() + expiresInSec - expirationBufferSec);

            dispatch(setTokenThunk(token, expiresAt));
        } catch (e) {
            dispatch(authLoginFetchError(fetchId, e.toString()));
        }
    };
};
