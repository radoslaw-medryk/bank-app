import { TransactionsActionType } from "./TransactionsAction";
import { FetchId } from "src/state/FetchState";

export type TransactionsFetchStart = {
    type: TransactionsActionType.FetchStart;
    id: FetchId;
};

export const transactionsFetchStart = (id: FetchId): TransactionsFetchStart => ({
    type: TransactionsActionType.FetchStart,
    id: id,
});
