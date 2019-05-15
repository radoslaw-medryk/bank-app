import { FriendsActionType } from "./FriendsAction";

export type AddFriendFetchReset = {
    type: FriendsActionType.AddFriendFetchReset;
};

export const addFriendFetchReset = (): AddFriendFetchReset => ({
    type: FriendsActionType.AddFriendFetchReset,
});
