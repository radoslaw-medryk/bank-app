import { FriendsFetchStart } from "./FriendsFetchStart";
import { FriendsFetchSuccess } from "./FriendsFetchSuccess";
import { FriendsFetchError } from "./FriendsFetchError";
import { TransferFriendFetchStart } from "./TransferFriendFetchStart";
import { TransferFriendFetchSuccess } from "./TransferFriendFetchSuccess";
import { TransferFriendFetchError } from "./TransferFriendFetchError";
import { TransferFriendFetchReset } from "./TransferFriendFetchReset";

export enum FriendsActionType {
    FriendsFetchStart = "FriendsFetchStart",
    FriendsFetchSuccess = "FriendsFetchSuccess",
    FriendsFetchError = "FriendsFetchError",

    TransferFriendFetchStart = "TransferFriendFetchStart",
    TransferFriendFetchSuccess = "TransferFriendFetchSuccess",
    TransferFriendFetchError = "TransferFriendFetchError",
    TransferFriendFetchReset = "TransferFriendFetchReset",
}

export type FriendsAction =
    | FriendsFetchStart
    | FriendsFetchSuccess
    | FriendsFetchError
    | TransferFriendFetchStart
    | TransferFriendFetchSuccess
    | TransferFriendFetchError
    | TransferFriendFetchReset;
