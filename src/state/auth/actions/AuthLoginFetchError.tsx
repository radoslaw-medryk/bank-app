import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";
import { AuthLoginFetchStateError } from "../state";

export type AuthLoginFetchError = {
    type: AuthActionType.LoginFetchError;
    id: FetchId;
    error: AuthLoginFetchStateError;
};

export const authLoginFetchError = (id: FetchId, error: AuthLoginFetchStateError): AuthLoginFetchError => ({
    type: AuthActionType.LoginFetchError,
    id: id,
    error: error,
});
