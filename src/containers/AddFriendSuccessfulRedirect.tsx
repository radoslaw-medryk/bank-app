import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { ConditionalRedirect } from "src/components/ConditionalRedirect";
import { addFriendFetchReset } from "src/state/friends/actions/AddFriendFetchReset";

export type AddFriendSuccessfulRedirectProps = {
    to: string;
};

const mapStateToProps = (state: AppState, ownProps: AddFriendSuccessfulRedirectProps) => {
    const fetch = state.friends.addFriendFetch;
    const isSuccessful = !!fetch && fetch.status === "success";

    return {
        when: isSuccessful,
        to: ownProps.to,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBeforeRedirect: () => dispatch(addFriendFetchReset()),
});

export const AddFriendSuccessfulRedirect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConditionalRedirect);
