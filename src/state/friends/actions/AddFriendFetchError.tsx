import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";
import { AddFriendFetchStateError } from "../state";

export type AddFriendFetchError = {
    type: FriendsActionType.AddFriendFetchError;
    id: FetchId;
    error: AddFriendFetchStateError;
};

export const addFriendFetchError = (id: FetchId, error: AddFriendFetchStateError): AddFriendFetchError => ({
    type: FriendsActionType.AddFriendFetchError,
    id: id,
    error: error,
});
