import { transactionsFetchStart } from "../actions/TransactionFetchStart";
import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import { transactionsFetchSuccess } from "../actions/TransactionsFetchSuccess";
import { AppState } from "src/state/store";
import axios from "axios";
import { configPromise } from "src/config";
import { ApiSuccessfulResponse, ApiTransaction } from "@radoslaw-medryk/bank-core-shared";
import { mapTransaction } from "src/state/map/mapTransaction";
import { transactionsFetchError } from "../actions/TransactionsFetchError";
import { getTransactionsLowestId } from "src/state/helpers/getTransactionsLowestId";

export const transactionsFetchThunk = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const state = getState();

        const currentAccountId = state.accounts.currentAccountId;
        if (currentAccountId === undefined) {
            return;
        }

        if (state.accounts.transactionsFetches.some(q => q.status === "loading" && q.accountId === currentAccountId)) {
            // Don't fetch transactions if fetch for this accountId is in progress.
            return;
        }

        const token = state.auth.token;
        const beforeId = getTransactionsLowestId(state, currentAccountId);

        const fetchId = uniqueId();
        dispatch(transactionsFetchStart(fetchId, currentAccountId, beforeId));

        try {
            const { apiBaseUrl } = await configPromise;
            const response = await axios.get<ApiSuccessfulResponse<ApiTransaction[]>>(
                `/api/v1/accounts/${currentAccountId}/operations`,
                {
                    baseURL: apiBaseUrl,
                    params: { beforeId: beforeId },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const transactions = response.data.data.map(mapTransaction);
            dispatch(transactionsFetchSuccess(fetchId, transactions));
        } catch (e) {
            dispatch(transactionsFetchError(fetchId, e.toString()));
        }
    };
};
