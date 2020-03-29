import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";
import { AddFriendFetchStateData } from "../state";

export type AddFriendFetchSuccess = {
    type: FriendsActionType.AddFriendFetchSuccess;
    id: FetchId;
    data: AddFriendFetchStateData;
};

export const addFriendFetchSuccess = (id: FetchId, data: AddFriendFetchStateData): AddFriendFetchSuccess => ({
    type: FriendsActionType.AddFriendFetchSuccess,
    id: id,
    data: data,
});
