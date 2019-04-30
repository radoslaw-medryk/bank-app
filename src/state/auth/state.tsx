import { FetchState } from "../FetchState";
import { ApiRegisterUserResponse, ApiAccessTokenResponse } from "@radoslaw-medryk/bank-core-shared";

export type AuthLoginFetchStateData = ApiAccessTokenResponse;
export type AuthLoginFetchStateError = string;
export type AuthLoginFetchState = FetchState<AuthLoginFetchStateData, AuthLoginFetchStateError>;

export type AuthRegisterFetchStateData = ApiRegisterUserResponse;
export type AuthRegisterFetchStateError = string;
export type AuthRegisterFetchState = FetchState<AuthRegisterFetchStateData, AuthRegisterFetchStateError>;

export type AuthState = {
    loginFetch: AuthLoginFetchState | undefined;
    registerFetch: AuthRegisterFetchState | undefined;
    token: string | undefined;
    tokenExpiresAt: Date | undefined;
    profile:
        | undefined
        | {
              email: string;
          };
};

export const initialAuthState: AuthState = {
    loginFetch: undefined,
    registerFetch: undefined,
    token: undefined,
    tokenExpiresAt: undefined,
    profile: undefined,
};
