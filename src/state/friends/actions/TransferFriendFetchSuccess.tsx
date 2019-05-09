import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";
import { TransferFriendFetchStateData } from "../state";

export type TransferFriendFetchSuccess = {
    type: FriendsActionType.TransferFriendFetchSuccess;
    id: FetchId;
    data: TransferFriendFetchStateData;
};

export const transferFriendFetchSuccess = (
    id: FetchId,
    data: TransferFriendFetchStateData
): TransferFriendFetchSuccess => ({
    type: FriendsActionType.TransferFriendFetchSuccess,
    id: id,
    data: data,
});
