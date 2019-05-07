import { FriendsActionType } from "./FriendsAction";

export type FriendsReset = {
    type: FriendsActionType.FriendsReset;
};

export const friendsReset = (): FriendsReset => ({
    type: FriendsActionType.FriendsReset,
});
