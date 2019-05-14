import { FriendsActionType } from "./FriendsAction";

export type AddFriendFetchReset = {
    type: FriendsActionType.AddFriendFetchReset;
};

export const transferFriendFetchReset = (): AddFriendFetchReset => ({
    type: FriendsActionType.AddFriendFetchReset,
});
