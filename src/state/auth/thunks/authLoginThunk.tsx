import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import { authLoginFetchStart } from "../actions/AuthLoginFetchStart";
import axios from "axios";
import { ApiAccessLoginRequest, ApiSuccessfulResponse } from "@radoslaw-medryk/bank-core-shared";
import { AuthLoginFetchStateData } from "../state";
import { appConfig } from "src/config";
import { mapAuthData } from "src/state/map/mapAuthData";
import { authLoginFetchSuccess } from "../actions/AuthLoginFetchSuccess";
import { authLoginFetchError } from "../actions/AuthLoginFetchError";

export const authLoginThunk = (email: string, password: string) => {
    return async (dispatch: AppDispatch) => {
        const fetchId = uniqueId();
        dispatch(authLoginFetchStart(fetchId));

        try {
            const request: ApiAccessLoginRequest = {
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

            const authData = mapAuthData(response.data.data);

            dispatch(authLoginFetchSuccess(fetchId, authData));
        } catch (e) {
            dispatch(authLoginFetchError(fetchId, e.toString()));
        }
    };
};
