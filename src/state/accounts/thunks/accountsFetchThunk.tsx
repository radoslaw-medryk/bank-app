import { AppDispatch } from "src/state/types";
import { AppState } from "src/state/store";
import { uniqueId } from "src/helpers/uniqueId";
import { accountsFetchStart } from "../actions/AccountsFetchStart";
import { ApiAccount } from "@radoslaw-medryk/bank-core-shared/dist/ApiAccount";
import { ApiSuccessfulResponse } from "@radoslaw-medryk/bank-core-shared";
import axios from "axios";
import { configPromise } from "src/config";
import { mapAccount } from "src/state/map/mapAccount";
import { accountsFetchSuccess } from "../actions/AccountsFetchSuccess";
import { accountsFetchError } from "../actions/AccountsFetchError";
import { accountSetCurrent } from "../actions/AccountSetCurrent";
import { transactionsClear } from "../actions/TransactionsClear";

export const accountsFetchThunk = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const fetchId = uniqueId();
        dispatch(accountsFetchStart(fetchId));
        dispatch(transactionsClear());

        const state = getState();
        const token = state.auth.token;
        const currentAccountId = state.accounts.currentAccountId;

        if (!token) {
            dispatch(accountsFetchError(fetchId, "No access token."));
            return;
        }

        try {
            const { apiBaseUrl } = await configPromise;
            const response = await axios.get<ApiSuccessfulResponse<ApiAccount[]>>("/api/v1/accounts", {
                baseURL: apiBaseUrl,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const accounts = response.data.data.map(mapAccount);
            dispatch(accountsFetchSuccess(fetchId, accounts));

            if (currentAccountId === null || !accounts.some(q => q.id === currentAccountId)) {
                const newCurrentAccountId = accounts.length > 0 ? accounts[0].id : undefined;
                dispatch(accountSetCurrent(newCurrentAccountId));
            }
        } catch (e) {
            dispatch(accountsFetchError(fetchId, e.toString()));
        }
    };
};
