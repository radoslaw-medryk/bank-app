import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";
import { FriendsFetchStateError } from "../state";

export type FriendsFetchError = {
    type: FriendsActionType.FriendsFetchError;
    id: FetchId;
    error: FriendsFetchStateError;
};

export const friendsFetchError = (id: FetchId, error: FriendsFetchStateError): FriendsFetchError => ({
    type: FriendsActionType.FriendsFetchError,
    id: id,
    error: error,
});
