import { FriendsList, FriendsListProps } from "src/components/FriendsList";
import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { ApiFriend } from "@radoslaw-medryk/bank-core-shared";

export type FriendsListContainerProps = {
    linkTo: (friend: ApiFriend) => string;
    search?: string;
};

const mapStateToProps = (state: AppState, ownProps: FriendsListContainerProps): FriendsListProps => {
    const friendsFetch = state.friends.friendsFetch;

    const friends = friendsFetch && friendsFetch.status === "success" ? friendsFetch.data : undefined;

    return {
        friends: friends,
        linkTo: ownProps.linkTo,
        search: ownProps.search,
    };
};

export const FriendsListContainer = connect(mapStateToProps)(FriendsList);
