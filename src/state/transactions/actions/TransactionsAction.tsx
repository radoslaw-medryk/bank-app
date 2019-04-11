import { TransactionsFetchStart } from "./TransactionFetchStart";
import { TransactionsFetchSuccess } from "./TransactionsFetchSuccess";
import { TransactionsFetchError } from "./TransactionsFetchError";
import { TransactionsSetLastId } from "./TransactionsSetLastDate";
import { TransactionsClear } from "./TransactionsClear";

export enum TransactionsActionType {
    FetchStart = "TransactionsFetchStart",
    FetchSuccess = "TransactionsFetchSuccess",
    FetchError = "TransactionsFetchError",
    SetLastId = "TransactionsSetLastId",
    Clear = "TransactionsClear",
}

export type TransactionsAction =
    | TransactionsFetchStart
    | TransactionsFetchSuccess
    | TransactionsFetchError
    | TransactionsSetLastId
    | TransactionsClear;
