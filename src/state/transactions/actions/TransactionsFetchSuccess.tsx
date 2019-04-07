import { TransactionsFetchStateData } from "../state";
import { TransactionsActionType } from "./TransactionsAction";
import { FetchId } from "src/state/FetchState";

export type TransactionsFetchSuccess = {
    type: TransactionsActionType.FetchSuccess;
    id: FetchId;
    data: TransactionsFetchStateData;
};

export const transactionsFetchSuccess = (id: FetchId, data: TransactionsFetchStateData): TransactionsFetchSuccess => ({
    type: TransactionsActionType.FetchSuccess,
    id: id,
    data: data,
});
