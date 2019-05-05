import { AppDispatch } from "src/state/types";
import { AppState } from "src/state/store";
import { uniqueId } from "src/helpers/uniqueId";
import { configPromise } from "src/config";
import {
    ApiSuccessfulResponse,
    ApiAccountId,
    ApiFriendId,
    ApiTransferFriendRequest,
    ApiTransferFriendResponse,
} from "@radoslaw-medryk/bank-core-shared";
import axios from "axios";
import Big from "big.js";
import { transferFriendFetchStart } from "../actions/TransferFriendFetchStart";
import { transferFriendFetchError } from "../actions/TransferFriendFetchError";
import { transferFriendFetchSuccess } from "../actions/TransferFriendFetchSuccess";
import { accountsFetchThunk } from "src/state/accounts/thunks/accountsFetchThunk";

export const transferFriendThunk = (accountId: ApiAccountId, friendId: ApiFriendId, amount: Big) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const fetchId = uniqueId();
        dispatch(transferFriendFetchStart(fetchId, accountId, friendId, amount));

        const state = getState();
        const token = state.auth.token;

        if (!token) {
            dispatch(transferFriendFetchError(fetchId, "No access token."));
            return;
        }

        try {
            const request: ApiTransferFriendRequest = {
                accountId: accountId,
                amount: amount.toFixed(),
                title: "Transfer to a friend",
            };

            const { apiBaseUrl } = await configPromise;
            const response = await axios.post<ApiSuccessfulResponse<ApiTransferFriendResponse>>(
                `/api/v1/friends/${friendId}/transfers`,
                request,
                {
                    baseURL: apiBaseUrl,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            dispatch(transferFriendFetchSuccess(fetchId, response.data.data));
            dispatch(accountsFetchThunk());
        } catch (e) {
            dispatch(transferFriendFetchError(fetchId, e.toString()));
        }
    };
};
