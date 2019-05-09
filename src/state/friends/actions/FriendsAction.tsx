import { FriendsFetchStart } from "./FriendsFetchStart";
import { FriendsFetchSuccess } from "./FriendsFetchSuccess";
import { FriendsFetchError } from "./FriendsFetchError";
import { TransferFriendFetchStart } from "./TransferFriendFetchStart";
import { TransferFriendFetchSuccess } from "./TransferFriendFetchSuccess";
import { TransferFriendFetchError } from "./TransferFriendFetchError";
import { TransferFriendFetchReset } from "./TransferFriendFetchReset";
import { FriendsReset } from "./FriendsReset";

export enum FriendsActionType {
    FriendsFetchStart = "FriendsFetchStart",
    FriendsFetchSuccess = "FriendsFetchSuccess",
    FriendsFetchError = "FriendsFetchError",

    TransferFriendFetchStart = "TransferFriendFetchStart",
    TransferFriendFetchSuccess = "TransferFriendFetchSuccess",
    TransferFriendFetchError = "TransferFriendFetchError",
    TransferFriendFetchReset = "TransferFriendFetchReset",

    FriendsReset = "FriendsReset",
}

export type FriendsAction =
    | FriendsFetchStart
    | FriendsFetchSuccess
    | FriendsFetchError
    | TransferFriendFetchStart
    | TransferFriendFetchSuccess
    | TransferFriendFetchError
    | TransferFriendFetchReset
    | FriendsReset;
