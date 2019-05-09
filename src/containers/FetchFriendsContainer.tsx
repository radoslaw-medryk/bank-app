import { connect } from "react-redux";
import { FetchStatus } from "src/state/FetchState";
import * as React from "react";
import { AppDispatch } from "src/state/types";
import { AppState } from "src/state/store";
import { friendsFetchThunk } from "src/state/friends/thunks/friendsFetchThunk";

type FetchFriendsProps = {
    fetchStatus: FetchStatus | undefined;
    performFetch: () => void;
};

const FetchFriends: React.SFC<FetchFriendsProps> = ({ fetchStatus, performFetch }) => {
    React.useEffect(() => {
        if (fetchStatus !== "success" && fetchStatus !== "loading") {
            performFetch();
        }
    }, [fetchStatus]);

    return null;
};

const mapStateToProps = (state: AppState) => {
    const friendsFetch = state.friends.friendsFetch;
    const fetchStatus = friendsFetch && friendsFetch.status;

    return {
        fetchStatus: fetchStatus,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    performFetch: () => dispatch(friendsFetchThunk()),
});

export const FetchFriendsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchFriends);
