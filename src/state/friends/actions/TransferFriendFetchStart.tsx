import { FetchId } from "src/state/FetchState";
import { FriendsActionType } from "./FriendsAction";
import { ApiAccountId, ApiFriendId } from "@radoslaw-medryk/bank-core-shared";
import Big from "big.js";

export type TransferFriendFetchStart = {
    type: FriendsActionType.TransferFriendFetchStart;
    id: FetchId;
    accountId: ApiAccountId;
    friendId: ApiFriendId;
    amount: Big;
};

export const transferFriendFetchStart = (
    id: FetchId,
    accountId: ApiAccountId,
    friendId: ApiFriendId,
    amount: Big
): TransferFriendFetchStart => ({
    type: FriendsActionType.TransferFriendFetchStart,
    id: id,
    accountId: accountId,
    friendId: friendId,
    amount: amount,
});
