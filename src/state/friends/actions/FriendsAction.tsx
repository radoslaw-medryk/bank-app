import { FriendsFetchStart } from "./FriendsFetchStart";
import { FriendsFetchSuccess } from "./FriendsFetchSuccess";
import { FriendsFetchError } from "./FriendsFetchError";

export enum FriendsActionType {
    FriendsFetchStart = "FriendsFetchStart",
    FriendsFetchSuccess = "FriendsFetchSuccess",
    FriendsFetchError = "FriendsFetchError",
}

export type FriendsAction = FriendsFetchStart | FriendsFetchSuccess | FriendsFetchError;
