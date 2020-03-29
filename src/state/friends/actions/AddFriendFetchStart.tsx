import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";

export type AddFriendFetchStart = {
    type: FriendsActionType.AddFriendFetchStart;
    id: FetchId;
    email: string;
};

export const addFriendFetchStart = (id: FetchId, email: string): AddFriendFetchStart => ({
    type: FriendsActionType.AddFriendFetchStart,
    id: id,
    email: email,
});
