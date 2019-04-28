import { AccountsActionType } from "./AccountsAction";
import { FetchId } from "src/state/FetchState";
import { AccountsFetchStateError } from "../state";

export type AccountsFetchError = {
    type: AccountsActionType.AccountsFetchError;
    id: FetchId;
    error: AccountsFetchStateError;
};

export const accountsFetchError = (id: FetchId, error: AccountsFetchStateError): AccountsFetchError => ({
    type: AccountsActionType.AccountsFetchError,
    id: id,
    error: error,
});
