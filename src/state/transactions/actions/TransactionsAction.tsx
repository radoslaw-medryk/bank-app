import { TransactionsFetchStart } from "./TransactionFetchStart";
import { TransactionsFetchSuccess } from "./TransactionsFetchSuccess";
import { TransactionsFetchError } from "./TransactionsFetchError";
import { TransactionsSetLastDate } from "./TransactionsSetLastDate";
import { TransactionsClear } from "./TransactionsClear";

export enum TransactionsActionType {
    FetchStart = "TransactionsFetchStart",
    FetchSuccess = "TransactionsFetchSuccess",
    FetchError = "TransactionsFetchError",
    SetLastDate = "TransactionsSetLastDate",
    Clear = "TransactionsClear",
}

export type TransactionsAction =
    | TransactionsFetchStart
    | TransactionsFetchSuccess
    | TransactionsFetchError
    | TransactionsSetLastDate
    | TransactionsClear;
