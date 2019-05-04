import { FetchState } from "../FetchState";
import { ApiFriend } from "@radoslaw-medryk/bank-core-shared";

export type FriendsFetchStateData = ApiFriend[];
export type FriendsFetchStateError = string;
export type FriendsFetchState = FetchState<FriendsFetchStateData, FriendsFetchStateError>;

export type FriendsState = {
    friendsFetch: FriendsFetchState | undefined;
};

export const initialFriendsState: FriendsState = {
    friendsFetch: undefined,
};
