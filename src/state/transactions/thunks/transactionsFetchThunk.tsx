import { transactionsFetchStart } from "../actions/TransactionFetchStart";
import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import { transactionsFetchSuccess } from "../actions/TransactionsFetchSuccess";
import { AppState } from "src/state/store";
import { transactionsSetLastId } from "../actions/TransactionsSetLastDate";
import axios from "axios";
import { appConfig } from "src/config";
import { ApiSuccessfulResponse, ApiTransaction } from "@radoslaw-medryk/bank-core-shared";
import { mapApiTransaction } from "src/state/map/mapApiTransaction";
import { transactionsFetchError } from "../actions/TransactionsFetchError";

export const transactionsFetchThunk = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const fetchId = uniqueId();
        dispatch(transactionsFetchStart(fetchId));

        const state = getState();
        const lastId = state.transactions.lastId;

        try {
            const response = await axios.get<ApiSuccessfulResponse<ApiTransaction[]>>("/api/v1/transactions", {
                baseURL: appConfig.apiBaseUrl,
                params: { beforeId: lastId },
            });

            const transactions = response.data.data.map(mapApiTransaction);
            dispatch(transactionsFetchSuccess(fetchId, transactions));

            if (transactions.length > 0) {
                const newLastId = transactions[transactions.length - 1].id;
                dispatch(transactionsSetLastId(newLastId));
            }
        } catch (e) {
            dispatch(transactionsFetchError(fetchId, e.toString()));
        }
    };
};
