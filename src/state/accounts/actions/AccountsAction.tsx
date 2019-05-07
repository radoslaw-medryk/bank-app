import { TransactionsFetchStart } from "./TransactionFetchStart";
import { TransactionsFetchSuccess } from "./TransactionsFetchSuccess";
import { TransactionsFetchError } from "./TransactionsFetchError";
import { TransactionsClear } from "./TransactionsClear";
import { AccountsFetchStart } from "./AccountsFetchStart";
import { AccountsFetchSuccess } from "./AccountsFetchSuccess";
import { AccountsFetchError } from "./AccountsFetchError";
import { AccountSetCurrent } from "./AccountSetCurrent";
import { AccountsClear } from "./AccountsClear";

export enum AccountsActionType {
    TransactionsFetchStart = "TransactionsFetchStart",
    TransactionsFetchSuccess = "TransactionsFetchSuccess",
    TransactionsFetchError = "TransactionsFetchError",
    TransactionsClear = "TransactionsClear",

    AccountsFetchStart = "AccountsFetchStart",
    AccountsFetchSuccess = "AccountsFetchSuccess",
    AccountsFetchError = "AccountsFetchError",
    AccountsClear = "AccountsClear",

    AccountSetCurrent = "AccountSetCurrent",
}

export type AccountsAction =
    | TransactionsFetchStart
    | TransactionsFetchSuccess
    | TransactionsFetchError
    | TransactionsClear
    | AccountsFetchStart
    | AccountsFetchSuccess
    | AccountsFetchError
    | AccountsClear
    | AccountSetCurrent;
