import { AppState } from "../store";

export const getToken = (state: AppState): string | undefined => {
    return state.auth.loginFetch && state.auth.loginFetch.status === "success"
        ? state.auth.loginFetch.data.token
        : undefined;
};
