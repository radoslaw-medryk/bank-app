import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import axios from "axios";
import { ApiSuccessfulResponse, ApiRegisterUserRequest } from "@radoslaw-medryk/bank-core-shared";
import { AuthRegisterFetchStateData } from "../state";
import { configPromise } from "src/config";
import { authRegisterFetchStart } from "../actions/AuthRegisterFetchStart";
import { authRegisterFetchSuccess } from "../actions/AuthRegisterFetchSuccess";
import { authRegisterFetchError } from "../actions/AuthRegisterFetchError";
import { authLoginThunk } from "./authLoginThunk";
import { registerApiErrorsThunk } from "src/state/ui/thunks/registerApiErrorsThunk";
import { AppState } from "src/state/store";

export const authRegisterThunk = (email: string, password: string) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const currentRegisterFetch = getState().auth.loginFetch;
        if (currentRegisterFetch && currentRegisterFetch.status === "loading") {
            return;
        }

        const fetchId = uniqueId();
        dispatch(authRegisterFetchStart(fetchId));

        try {
            const request: ApiRegisterUserRequest = {
                email: email,
                password: password,
            };

            const { apiBaseUrl } = await configPromise;
            const response = await axios.post<ApiSuccessfulResponse<AuthRegisterFetchStateData>>(
                "/api/v1/access/users",
                request,
                {
                    baseURL: apiBaseUrl,
                }
            );

            dispatch(authRegisterFetchSuccess(fetchId, response.data.data));

            dispatch(authLoginThunk(email, password));
        } catch (e) {
            dispatch(authRegisterFetchError(fetchId, e.toString()));
            dispatch(registerApiErrorsThunk(e));
        }
    };
};
