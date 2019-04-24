import { AuthLoginFetchStart } from "./AuthLoginFetchStart";
import { AuthLoginFetchSuccess } from "./AuthLoginFetchSuccess";
import { AuthLoginFetchError } from "./AuthLoginFetchError";

export enum AuthActionType {
    LoginFetchStart = "AuthLoginFetchStart",
    LoginFetchSuccess = "AuthLoginFetchSuccess",
    LoginFetchError = "AuthLoginFetchError",
}

export type AuthAction = AuthLoginFetchStart | AuthLoginFetchSuccess | AuthLoginFetchError;
