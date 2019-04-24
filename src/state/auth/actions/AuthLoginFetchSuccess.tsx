import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";
import { AuthData } from "src/models/AuthData";

export type AuthLoginFetchSuccess = {
    type: AuthActionType.LoginFetchSuccess;
    id: FetchId;
    authData: AuthData;
};

export const authLoginFetchSuccess = (id: FetchId, authData: AuthData): AuthLoginFetchSuccess => ({
    type: AuthActionType.LoginFetchSuccess,
    id: id,
    authData: authData,
});
