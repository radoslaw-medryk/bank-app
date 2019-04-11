import { TransactionsState, initialTransactionsState, TransactionsFetchState } from "./state";
import { AppAction } from "src/state/types";
import { TransactionsActionType } from "./actions/TransactionsAction";
import { TransactionsFetchStart } from "./actions/TransactionFetchStart";
import { TransactionsFetchSuccess } from "./actions/TransactionsFetchSuccess";
import { TransactionsFetchError } from "./actions/TransactionsFetchError";
import { TransactionsSetLastId } from "./actions/TransactionsSetLastDate";
import { TransactionsClear } from "./actions/TransactionsClear";

export const transactionsReducer = (
    state: TransactionsState = initialTransactionsState,
    action: AppAction
): TransactionsState => {
    switch (action.type) {
        case TransactionsActionType.FetchStart:
            return fetchStart(state, action);

        case TransactionsActionType.FetchSuccess:
            return fetchSuccess(state, action);

        case TransactionsActionType.FetchError:
            return fetchError(state, action);

        case TransactionsActionType.SetLastId:
            return setLastId(state, action);

        case TransactionsActionType.Clear:
            return clear(state, action);
    }

    return state;
};

const fetchStart = (state: TransactionsState, action: TransactionsFetchStart): TransactionsState => {
    const newFetchState: TransactionsFetchState = {
        id: action.id,
        status: "loading",
    };

    const newState: TransactionsState = {
        ...state,
        fetches: [...state.fetches, newFetchState],
    };
    return newState;
};

const fetchSuccess = (state: TransactionsState, action: TransactionsFetchSuccess): TransactionsState => {
    const updateFetchState = (fetch: TransactionsFetchState): TransactionsFetchState => {
        if (fetch.id !== action.id) {
            return fetch;
        }

        return {
            id: action.id,
            status: "success",
            data: action.data,
        };
    };

    const newState: TransactionsState = {
        ...state,
        fetches: [...state.fetches.map(q => updateFetchState(q))],
    };
    return newState;
};

const fetchError = (state: TransactionsState, action: TransactionsFetchError): TransactionsState => {
    const updateFetchState = (fetch: TransactionsFetchState): TransactionsFetchState => {
        if (fetch.id !== action.id) {
            return fetch;
        }

        return {
            id: action.id,
            status: "error",
            error: action.error,
        };
    };

    const newState: TransactionsState = {
        ...state,
        fetches: [...state.fetches.map(q => updateFetchState(q))],
    };
    return newState;
};

const setLastId = (state: TransactionsState, action: TransactionsSetLastId): TransactionsState => {
    const newState: TransactionsState = {
        ...state,
        lastId: action.lastId,
    };

    return newState;
};

const clear = (state: TransactionsState, action: TransactionsClear): TransactionsState => {
    const newState: TransactionsState = {
        ...state,
        fetches: [],
        lastId: undefined,
    };

    return newState;
};
