import { AppDispatch } from "src/state/types";
import { AppState } from "src/state/store";
import { uniqueId } from "src/helpers/uniqueId";
import { friendsFetchStart } from "../actions/FriendsFetchStart";
import { friendsFetchError } from "../actions/FriendsFetchError";
import { configPromise } from "src/config";
import { ApiSuccessfulResponse, ApiFriend } from "@radoslaw-medryk/bank-core-shared";
import axios from "axios";
import { friendsFetchSuccess } from "../actions/FriendsFetchSuccess";

export const friendsFetchThunk = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const fetchId = uniqueId();
        dispatch(friendsFetchStart(fetchId));

        const state = getState();
        const token = state.auth.token;

        if (!token) {
            dispatch(friendsFetchError(fetchId, "No access token."));
            return;
        }

        try {
            const { apiBaseUrl } = await configPromise;
            const response = await axios.get<ApiSuccessfulResponse<ApiFriend[]>>("/api/v1/friends", {
                baseURL: apiBaseUrl,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(friendsFetchSuccess(fetchId, response.data.data));
        } catch (e) {
            dispatch(friendsFetchError(fetchId, e.toString()));
        }
    };
};
