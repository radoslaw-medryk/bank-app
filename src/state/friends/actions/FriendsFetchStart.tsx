import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";

export type FriendsFetchStart = {
    type: FriendsActionType.FriendsFetchStart;
    id: FetchId;
};

export const friendsFetchStart = (id: FetchId): FriendsFetchStart => ({
    type: FriendsActionType.FriendsFetchStart,
    id: id,
});
