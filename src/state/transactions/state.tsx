import { FetchState } from "../FetchState";
import { Transaction } from "src/models/Transaction";

export type TransactionsFetchStateData = Transaction[];
export type TransactionsFetchStateError = string;

export type TransactionsFetchState = FetchState<TransactionsFetchStateData, TransactionsFetchStateError>;

export type TransactionsState = {
    fetches: TransactionsFetchState[];
    lastDate: Date | undefined;
};

export const initialTransactionsState: TransactionsState = {
    fetches: [],
    lastDate: undefined,
};
