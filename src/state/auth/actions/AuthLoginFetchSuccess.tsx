import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";
import { AuthLoginFetchStateData } from "../state";

export type AuthLoginFetchSuccess = {
    type: AuthActionType.LoginFetchSuccess;
    id: FetchId;
    authData: AuthLoginFetchStateData;
};

export const authLoginFetchSuccess = (id: FetchId, authData: AuthLoginFetchStateData): AuthLoginFetchSuccess => ({
    type: AuthActionType.LoginFetchSuccess,
    id: id,
    authData: authData,
});
