import { FetchState } from "../FetchState";
import { Transaction } from "src/models/Transaction";
import { Account } from "src/models/Account";

export type AccountsFetchStateData = Account[];
export type AccountsFetchStateError = string;
export type AccountsFetchState = FetchState<AccountsFetchStateData, AccountsFetchStateError>;

export type TransactionsFetchStateData = Transaction[];
export type TransactionsFetchStateError = string;
export type TransactionsFetchState = FetchState<TransactionsFetchStateData, TransactionsFetchStateError> & {
    accountId: number;
    beforeId: number | undefined;
};

export type AccountsState = {
    accountsFetch: AccountsFetchState | undefined;
    currentAccountId: number | undefined;

    transactionsFetches: TransactionsFetchState[];
};

export const initialAccountsState: AccountsState = {
    accountsFetch: undefined,
    currentAccountId: undefined,

    transactionsFetches: [],
};
