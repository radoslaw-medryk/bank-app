import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";
import { TransferFriendFetchStateError } from "../state";

export type TransferFriendFetchError = {
    type: FriendsActionType.TransferFriendFetchError;
    id: FetchId;
    error: TransferFriendFetchStateError;
};

export const transferFriendFetchError = (
    id: FetchId,
    error: TransferFriendFetchStateError
): TransferFriendFetchError => ({
    type: FriendsActionType.TransferFriendFetchError,
    id: id,
    error: error,
});
