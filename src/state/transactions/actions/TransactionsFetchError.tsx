import { TransactionsFetchStateError } from "../state";
import { TransactionsActionType } from "./TransactionsAction";
import { FetchId } from "src/state/FetchState";

export type TransactionsFetchError = {
    type: TransactionsActionType.FetchError;
    id: FetchId;
    error: TransactionsFetchStateError;
};

export const transactionsFetchError = (id: FetchId, error: TransactionsFetchStateError): TransactionsFetchError => ({
    type: TransactionsActionType.FetchError,
    id: id,
    error: error,
});
