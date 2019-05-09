import { FriendsActionType } from "./FriendsAction";

export type TransferFriendFetchReset = {
    type: FriendsActionType.TransferFriendFetchReset;
};

export const transferFriendFetchReset = (): TransferFriendFetchReset => ({
    type: FriendsActionType.TransferFriendFetchReset,
});
