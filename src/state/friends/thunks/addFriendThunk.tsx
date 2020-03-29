import { AppDispatch } from "src/state/types";
import { AppState } from "src/state/store";
import { uniqueId } from "src/helpers/uniqueId";
import { configPromise } from "src/config";
import { ApiSuccessfulResponse, ApiAddFriendRequest, ApiAddFriendResponse } from "@radoslaw-medryk/bank-core-shared";
import axios from "axios";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { AreaKey, AddFriendKey } from "src/state/ui/state";
import { uiSetErrors } from "src/state/ui/actions/UiSetErrors";
import { addFriendFetchStart } from "../actions/AddFriendFetchStart";
import { friendsFetchThunk } from "./friendsFetchThunk";
import { addFriendFetchSuccess } from "../actions/AddFriendFetchSuccess";
import { addFriendFetchError } from "../actions/AddFriendFetchError";
import { addFriendApiErrorsThunk } from "src/state/ui/thunks/addFriendApiErrorsThunk";

const addFriendArea: AreaKey = "addFriend";
const emailField: AddFriendKey = "email";

export const addFriendThunk = (email: string) => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const currentAddFriendFetch = getState().friends.addFriendFetch;
        if (currentAddFriendFetch && currentAddFriendFetch.status === "loading") {
            return;
        }

        const fetchId = uniqueId();
        dispatch(addFriendFetchStart(fetchId, email));

        const state = getState();
        const token = state.auth.token;

        if (!token) {
            dispatch(addFriendFetchError(fetchId, "No access token."));
            return;
        }

        try {
            const request: ApiAddFriendRequest = {
                email: email,
            };

            const { apiBaseUrl } = await configPromise;
            const response = await axios.post<ApiSuccessfulResponse<ApiAddFriendResponse>>(`/api/v1/friends`, request, {
                baseURL: apiBaseUrl,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(addFriendFetchSuccess(fetchId, response.data.data));
            dispatch(uiSetField(addFriendArea, emailField, undefined));
            dispatch(uiSetErrors(addFriendArea, [emailField], undefined));
            dispatch(friendsFetchThunk());
        } catch (e) {
            dispatch(addFriendFetchError(fetchId, e.toString()));
            dispatch(addFriendApiErrorsThunk(e));
        }
    };
};
