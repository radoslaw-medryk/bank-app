import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";

export type AuthRegisterFetchStart = {
    type: AuthActionType.RegisterFetchStart;
    id: FetchId;
};

export const authRegisterFetchStart = (id: FetchId): AuthRegisterFetchStart => ({
    type: AuthActionType.RegisterFetchStart,
    id: id,
});
