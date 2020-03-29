import { FriendsState, initialFriendsState } from "./state";
import { AppAction } from "../types";
import { FriendsFetchStart } from "./actions/FriendsFetchStart";
import { FriendsFetchSuccess } from "./actions/FriendsFetchSuccess";
import { FriendsFetchError } from "./actions/FriendsFetchError";
import { FriendsActionType } from "./actions/FriendsAction";
import { TransferFriendFetchStart } from "./actions/TransferFriendFetchStart";
import { TransferFriendFetchSuccess } from "./actions/TransferFriendFetchSuccess";
import { TransferFriendFetchError } from "./actions/TransferFriendFetchError";
import { TransferFriendFetchReset } from "./actions/TransferFriendFetchReset";
import { FriendsReset } from "./actions/FriendsReset";
import { AddFriendFetchStart } from "./actions/AddFriendFetchStart";
import { AddFriendFetchSuccess } from "./actions/AddFriendFetchSuccess";
import { AddFriendFetchError } from "./actions/AddFriendFetchError";
import { AddFriendFetchReset } from "./actions/AddFriendFetchReset";

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

        case FriendsActionType.TransferFriendFetchStart:
            return transferFriendFetchStart(state, action);

        case FriendsActionType.TransferFriendFetchSuccess:
            return transferFriendFetchSuccess(state, action);

        case FriendsActionType.TransferFriendFetchError:
            return transferFriendFetchError(state, action);

        case FriendsActionType.TransferFriendFetchReset:
            return transferFriendFetchReset(state, action);

        case FriendsActionType.AddFriendFetchStart:
            return addFriendFetchStart(state, action);

        case FriendsActionType.AddFriendFetchSuccess:
            return addFriendFetchSuccess(state, action);

        case FriendsActionType.AddFriendFetchError:
            return addFriendFetchError(state, action);

        case FriendsActionType.AddFriendFetchReset:
            return addFriendFetchReset(state, action);

        case FriendsActionType.FriendsReset:
            return friendsReset(state, action);
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

const transferFriendFetchStart = (state: FriendsState, action: TransferFriendFetchStart): FriendsState => {
    const currentFetch = state.transferFriendFetch;

    if (currentFetch && currentFetch.status === "loading") {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        transferFriendFetch: {
            id: action.id,
            status: "loading",
        },
    };
    return newState;
};

const transferFriendFetchSuccess = (state: FriendsState, action: TransferFriendFetchSuccess): FriendsState => {
    const currentFetch = state.transferFriendFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        transferFriendFetch: {
            id: action.id,
            status: "success",
            data: action.data,
        },
    };
    return newState;
};

const transferFriendFetchError = (state: FriendsState, action: TransferFriendFetchError): FriendsState => {
    const currentFetch = state.transferFriendFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        transferFriendFetch: {
            id: action.id,
            status: "error",
            error: action.error,
        },
    };
    return newState;
};

const transferFriendFetchReset = (state: FriendsState, action: TransferFriendFetchReset): FriendsState => {
    const currentFetch = state.transferFriendFetch;

    if (!currentFetch || currentFetch.status === "loading") {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        transferFriendFetch: undefined,
    };
    return newState;
};

const addFriendFetchStart = (state: FriendsState, action: AddFriendFetchStart): FriendsState => {
    const currentFetch = state.addFriendFetch;

    if (currentFetch && currentFetch.status === "loading") {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        addFriendFetch: {
            id: action.id,
            status: "loading",
        },
    };
    return newState;
};

const addFriendFetchSuccess = (state: FriendsState, action: AddFriendFetchSuccess): FriendsState => {
    const currentFetch = state.addFriendFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        addFriendFetch: {
            id: action.id,
            status: "success",
            data: action.data,
        },
    };
    return newState;
};

const addFriendFetchError = (state: FriendsState, action: AddFriendFetchError): FriendsState => {
    const currentFetch = state.addFriendFetch;

    if (!currentFetch || currentFetch.status !== "loading" || currentFetch.id !== action.id) {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        addFriendFetch: {
            id: action.id,
            status: "error",
            error: action.error,
        },
    };
    return newState;
};

const addFriendFetchReset = (state: FriendsState, action: AddFriendFetchReset): FriendsState => {
    const currentFetch = state.addFriendFetch;

    if (!currentFetch || currentFetch.status === "loading") {
        return state;
    }

    const newState: FriendsState = {
        ...state,
        addFriendFetch: undefined,
    };
    return newState;
};

const friendsReset = (state: FriendsState, action: FriendsReset): FriendsState => {
    return initialFriendsState;
};
