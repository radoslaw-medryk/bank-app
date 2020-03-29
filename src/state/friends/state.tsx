import { FetchState } from "../FetchState";
import { ApiFriend, ApiTransferFriendResponse, ApiAddFriendResponse } from "@radoslaw-medryk/bank-core-shared";

export type FriendsFetchStateData = ApiFriend[];
export type FriendsFetchStateError = string;
export type FriendsFetchState = FetchState<FriendsFetchStateData, FriendsFetchStateError>;

export type TransferFriendFetchStateData = ApiTransferFriendResponse;
export type TransferFriendFetchStateError = string;
export type TransferFriendFetchState = FetchState<TransferFriendFetchStateData, TransferFriendFetchStateError>;

export type AddFriendFetchStateData = ApiAddFriendResponse; // TODO [RM]:
export type AddFriendFetchStateError = string;
export type AddFriendFetchState = FetchState<AddFriendFetchStateData, AddFriendFetchStateError>;

export type FriendsState = {
    friendsFetch: FriendsFetchState | undefined;
    transferFriendFetch: TransferFriendFetchState | undefined;
    addFriendFetch: AddFriendFetchState | undefined;
};

export const initialFriendsState: FriendsState = {
    friendsFetch: undefined,
    transferFriendFetch: undefined,
    addFriendFetch: undefined,
};
