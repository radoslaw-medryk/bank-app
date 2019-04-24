import { FetchState } from "../FetchState";
import { AuthData } from "src/models/AuthData";

export type AuthLoginFetchStateData = AuthData;
export type AuthLoginFetchStateError = string;

export type AuthLoginFetchState = FetchState<AuthLoginFetchStateData, AuthLoginFetchStateError>;

export type AuthState = {
    loginFetch: AuthLoginFetchState | undefined;
};

export const initialAuthState: AuthState = {
    loginFetch: undefined,
};
