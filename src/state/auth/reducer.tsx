import { AuthState, initialAuthState } from "./state";
import { AppAction } from "../types";
import { AuthLoginFetchStart } from "./actions/AuthLoginFetchStart";
import { AuthActionType } from "./actions/AuthAction";
import { AuthLoginFetchSuccess } from "./actions/AuthLoginFetchSuccess";
import { AuthLoginFetchError } from "./actions/AuthLoginFetchError";
import { AuthRegisterFetchStart } from "./actions/AuthRegisterFetchStart";
import { AuthRegisterFetchSuccess } from "./actions/AuthRegisterFetchSuccess";
import { AuthRegisterFetchError } from "./actions/AuthRegisterFetchError";
import { AuthSetToken } from "./actions/AuthSetToken";
import { AuthSetProfile } from "./actions/AuthSetProfile";

export const authReducer = (state: AuthState = initialAuthState, action: AppAction): AuthState => {
    switch (action.type) {
        case AuthActionType.LoginFetchStart:
            return loginFetchStart(state, action);

        case AuthActionType.LoginFetchSuccess:
            return loginFetchSuccess(state, action);

        case AuthActionType.LoginFetchError:
            return loginFetchError(state, action);

        case AuthActionType.SetToken:
            return setToken(state, action);

        case AuthActionType.SetProfile:
            return setProfile(state, action);

        case AuthActionType.RegisterFetchStart:
            return registerFetchStart(state, action);

        case AuthActionType.RegisterFetchSuccess:
            return registerFetchSuccess(state, action);

        case AuthActionType.RegisterFetchError:
            return registerFetchError(state, action);
    }

    return state;
};

const loginFetchStart = (state: AuthState, action: AuthLoginFetchStart): AuthState => {
    const currentFetch = state.loginFetch;

    if (currentFetch && currentFetch.status === "loading") {
        return state;
    }

    const newState: AuthState = {
        ...state,
        loginFetch: {
            id: action.id,
            status: "loading",
        },
    };
    return newState;
};

const loginFetchSuccess = (state: AuthState, action: AuthLoginFetchSuccess): AuthState => {
    const currentFetch = state.loginFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: AuthState = {
        ...state,
        loginFetch: {
            id: action.id,
            status: "success",
            data: action.authData,
        },
    };
    return newState;
};

const loginFetchError = (state: AuthState, action: AuthLoginFetchError): AuthState => {
    const currentFetch = state.loginFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: AuthState = {
        ...state,
        loginFetch: {
            id: action.id,
            status: "error",
            error: action.error,
        },
    };
    return newState;
};

const setToken = (state: AuthState, action: AuthSetToken): AuthState => {
    const newState: AuthState = {
        ...state,
        token: action.token,
        tokenExpiresAt: action.expiresAt,
    };

    return newState;
};

const setProfile = (state: AuthState, action: AuthSetProfile): AuthState => {
    const newState: AuthState = {
        ...state,
        profile:
            action.email !== undefined
                ? {
                      email: action.email,
                  }
                : undefined,
    };

    return newState;
};

const registerFetchStart = (state: AuthState, action: AuthRegisterFetchStart): AuthState => {
    const currentFetch = state.registerFetch;

    if (currentFetch && currentFetch.status === "loading") {
        return state;
    }

    const newState: AuthState = {
        ...state,
        registerFetch: {
            id: action.id,
            status: "loading",
        },
    };
    return newState;
};

const registerFetchSuccess = (state: AuthState, action: AuthRegisterFetchSuccess): AuthState => {
    const currentFetch = state.registerFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: AuthState = {
        ...state,
        registerFetch: {
            id: action.id,
            status: "success",
            data: action.data,
        },
    };
    return newState;
};

const registerFetchError = (state: AuthState, action: AuthRegisterFetchError): AuthState => {
    const currentFetch = state.registerFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: AuthState = {
        ...state,
        registerFetch: {
            id: action.id,
            status: "error",
            error: action.error,
        },
    };
    return newState;
};
