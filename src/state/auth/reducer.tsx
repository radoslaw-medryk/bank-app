import { AuthState, initialAuthState } from "./state";
import { AppAction } from "../types";
import { AuthLoginFetchStart } from "./actions/AuthLoginFetchStart";
import { AuthActionType } from "./actions/AuthAction";
import { AuthLoginFetchSuccess } from "./actions/AuthLoginFetchSuccess";
import { AuthLoginFetchError } from "./actions/AuthLoginFetchError";

export const authReducer = (state: AuthState = initialAuthState, action: AppAction): AuthState => {
    switch (action.type) {
        case AuthActionType.LoginFetchStart:
            return loginFetchStart(state, action);

        case AuthActionType.LoginFetchSuccess:
            return loginFetchSuccess(state, action);

        case AuthActionType.LoginFetchError:
            return loginFetchError(state, action);
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
