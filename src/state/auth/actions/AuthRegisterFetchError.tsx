import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";
import { AuthRegisterFetchStateError } from "../state";

export type AuthRegisterFetchError = {
    type: AuthActionType.RegisterFetchError;
    id: FetchId;
    error: AuthRegisterFetchStateError;
};

export const authRegisterFetchError = (id: FetchId, error: AuthRegisterFetchStateError): AuthRegisterFetchError => ({
    type: AuthActionType.RegisterFetchError,
    id: id,
    error: error,
});
