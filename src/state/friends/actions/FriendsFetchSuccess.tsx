import { FetchId } from "src/state/FetchState";
import { FriendsFetchStateData } from "../state";
import { FriendsActionType } from "./FriendsAction";

export type FriendsFetchSuccess = {
    type: FriendsActionType.FriendsFetchSuccess;
    id: FetchId;
    data: FriendsFetchStateData;
};

export const friendsFetchSuccess = (id: FetchId, data: FriendsFetchStateData): FriendsFetchSuccess => ({
    type: FriendsActionType.FriendsFetchSuccess,
    id: id,
    data: data,
});
