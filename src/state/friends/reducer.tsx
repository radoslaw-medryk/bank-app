import { FriendsState, initialFriendsState } from "./state";
import { AppAction } from "../types";
import { FriendsFetchStart } from "./actions/FriendsFetchStart";
import { FriendsFetchSuccess } from "./actions/FriendsFetchSuccess";
import { FriendsFetchError } from "./actions/FriendsFetchError";
import { FriendsActionType } from "./actions/FriendsAction";

export const friendsReducer = (
    state: FriendsState | undefined = initialFriendsState,
    action: AppAction
): FriendsState => {
    switch (action.type) {
        case FriendsActionType.FriendsFetchStart:
            return friendsFetchStart(state, action);

        case FriendsActionType.FriendsFetchSuccess:
            return friendsFetchSuccess(state, action);

        case FriendsActionType.FriendsFetchError:
            return friendsFetchError(state, action);
    }
    return state;
};

const friendsFetchStart = (state: FriendsState, action: FriendsFetchStart): FriendsState => {
    const currentFetch = state.friendsFetch;

    if (currentFetch && currentFetch.status === "loading") {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        friendsFetch: {
            id: action.id,
            status: "loading",
        },
    };
    return newState;
};

const friendsFetchSuccess = (state: FriendsState, action: FriendsFetchSuccess): FriendsState => {
    const currentFetch = state.friendsFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        friendsFetch: {
            id: action.id,
            status: "success",
            data: action.data,
        },
    };
    return newState;
};

const friendsFetchError = (state: FriendsState, action: FriendsFetchError): FriendsState => {
    const currentFetch = state.friendsFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        friendsFetch: {
            id: action.id,
            status: "error",
            error: action.error,
        },
    };
    return newState;
};
