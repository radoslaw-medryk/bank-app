import { TransactionsFetchStateError } from "../state";
import { AccountsActionType } from "./AccountsAction";
import { FetchId } from "src/state/FetchState";

export type TransactionsFetchError = {
    type: AccountsActionType.TransactionsFetchError;
    id: FetchId;
    error: TransactionsFetchStateError;
};

export const transactionsFetchError = (id: FetchId, error: TransactionsFetchStateError): TransactionsFetchError => ({
    type: AccountsActionType.TransactionsFetchError,
    id: id,
    error: error,
});
