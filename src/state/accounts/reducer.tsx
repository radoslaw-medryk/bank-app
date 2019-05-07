import { AccountsState, initialAccountsState, TransactionsFetchState } from "./state";
import { AppAction } from "src/state/types";
import { AccountsActionType } from "./actions/AccountsAction";
import { TransactionsFetchStart } from "./actions/TransactionFetchStart";
import { TransactionsFetchSuccess } from "./actions/TransactionsFetchSuccess";
import { TransactionsFetchError } from "./actions/TransactionsFetchError";
import { TransactionsClear } from "./actions/TransactionsClear";
import { AccountsFetchStart } from "./actions/AccountsFetchStart";
import { AccountsFetchSuccess } from "./actions/AccountsFetchSuccess";
import { AccountsFetchError } from "./actions/AccountsFetchError";
import { AccountSetCurrent } from "./actions/AccountSetCurrent";
import { AccountsClear } from "./actions/AccountsClear";

export const accountsReducer = (state: AccountsState = initialAccountsState, action: AppAction): AccountsState => {
    switch (action.type) {
        case AccountsActionType.AccountsFetchStart:
            return accountsFetchStart(state, action);

        case AccountsActionType.AccountsFetchSuccess:
            return accountsFetchSuccess(state, action);

        case AccountsActionType.AccountsFetchError:
            return accountsFetchError(state, action);

        case AccountsActionType.AccountsClear:
            return accountsClear(state, action);

        case AccountsActionType.TransactionsFetchStart:
            return transactionsFetchStart(state, action);

        case AccountsActionType.TransactionsFetchSuccess:
            return transactionsFetchSuccess(state, action);

        case AccountsActionType.TransactionsFetchError:
            return transactionsFetchError(state, action);

        case AccountsActionType.TransactionsClear:
            return transactionsClear(state, action);

        case AccountsActionType.AccountSetCurrent:
            return accountSetCurrent(state, action);
    }

    return state;
};

const transactionsFetchStart = (state: AccountsState, action: TransactionsFetchStart): AccountsState => {
    const newFetchState: TransactionsFetchState = {
        id: action.id,
        accountId: action.accountId,
        beforeId: action.beforeId,
        status: "loading",
    };

    const newState: AccountsState = {
        ...state,
        transactionsFetches: [...state.transactionsFetches, newFetchState],
    };
    return newState;
};

const transactionsFetchSuccess = (state: AccountsState, action: TransactionsFetchSuccess): AccountsState => {
    const updateFetchState = (fetch: TransactionsFetchState): TransactionsFetchState => {
        if (fetch.id !== action.id) {
            return fetch;
        }

        return {
            ...fetch,
            status: "success",
            data: action.data,
        };
    };

    const newState: AccountsState = {
        ...state,
        transactionsFetches: [...state.transactionsFetches.map(q => updateFetchState(q))],
    };
    return newState;
};

const transactionsFetchError = (state: AccountsState, action: TransactionsFetchError): AccountsState => {
    const updateFetchState = (fetch: TransactionsFetchState): TransactionsFetchState => {
        if (fetch.id !== action.id) {
            return fetch;
        }

        return {
            ...fetch,
            status: "error",
            error: action.error,
        };
    };

    const newState: AccountsState = {
        ...state,
        transactionsFetches: [...state.transactionsFetches.map(q => updateFetchState(q))],
    };
    return newState;
};

const transactionsClear = (state: AccountsState, action: TransactionsClear): AccountsState => {
    const newState: AccountsState = {
        ...state,
        transactionsFetches: [],
    };

    return newState;
};

const accountsFetchStart = (state: AccountsState, action: AccountsFetchStart): AccountsState => {
    const currentFetch = state.accountsFetch;

    if (currentFetch && currentFetch.status === "loading") {
        return state;
    }

    const newState: AccountsState = {
        ...state,
        accountsFetch: {
            id: action.id,
            status: "loading",
        },
    };
    return newState;
};

const accountsFetchSuccess = (state: AccountsState, action: AccountsFetchSuccess): AccountsState => {
    const currentFetch = state.accountsFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: AccountsState = {
        ...state,
        accountsFetch: {
            id: action.id,
            status: "success",
            data: action.data,
        },
    };
    return newState;
};

const accountsFetchError = (state: AccountsState, action: AccountsFetchError): AccountsState => {
    const currentFetch = state.accountsFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: AccountsState = {
        ...state,
        accountsFetch: {
            id: action.id,
            status: "error",
            error: action.error,
        },
    };
    return newState;
};

const accountsClear = (state: AccountsState, action: AccountsClear): AccountsState => {
    const newState: AccountsState = {
        ...state,
        accountsFetch: undefined,
    };

    return newState;
};

const accountSetCurrent = (state: AccountsState, action: AccountSetCurrent): AccountsState => {
    const newState: AccountsState = {
        ...state,
        currentAccountId: action.accountId,
    };
    return newState;
};
