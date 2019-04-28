import { AuthLoginFetchStart } from "./AuthLoginFetchStart";
import { AuthLoginFetchSuccess } from "./AuthLoginFetchSuccess";
import { AuthLoginFetchError } from "./AuthLoginFetchError";
import { AuthRegisterFetchStart } from "./AuthRegisterFetchStart";
import { AuthRegisterFetchSuccess } from "./AuthRegisterFetchSuccess";
import { AuthRegisterFetchError } from "./AuthRegisterFetchError";
import { AuthSetToken } from "./AuthSetToken";

export enum AuthActionType {
    LoginFetchStart = "AuthLoginFetchStart",
    LoginFetchSuccess = "AuthLoginFetchSuccess",
    LoginFetchError = "AuthLoginFetchError",

    SetToken = "AuthSetToken",

    RegisterFetchStart = "AuthRegisterFetchStart",
    RegisterFetchSuccess = "AuthRegisterFetchSuccess",
    RegisterFetchError = "AuthRegisterFetchError",
}

export type AuthAction =
    | AuthLoginFetchStart
    | AuthLoginFetchSuccess
    | AuthLoginFetchError
    | AuthSetToken
    | AuthRegisterFetchStart
    | AuthRegisterFetchSuccess
    | AuthRegisterFetchError;
