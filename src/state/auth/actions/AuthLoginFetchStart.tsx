import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";

export type AuthLoginFetchStart = {
    type: AuthActionType.LoginFetchStart;
    id: FetchId;
};

export const authLoginFetchStart = (id: FetchId): AuthLoginFetchStart => ({
    type: AuthActionType.LoginFetchStart,
    id: id,
});
