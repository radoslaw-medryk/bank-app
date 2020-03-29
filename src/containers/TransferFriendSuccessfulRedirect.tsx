import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { transferFriendFetchReset } from "src/state/friends/actions/TransferFriendFetchReset";
import { ConditionalRedirect } from "src/components/ConditionalRedirect";

export type TransferFriendSuccessfulRedirectProps = {
    to: string;
};

const mapStateToProps = (state: AppState, ownProps: TransferFriendSuccessfulRedirectProps) => {
    const fetch = state.friends.transferFriendFetch;
    const isSuccessfulTransfer = !!fetch && fetch.status === "success";

    return {
        when: isSuccessfulTransfer,
        to: ownProps.to,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    onBeforeRedirect: () => dispatch(transferFriendFetchReset()),
});

export const TransferFriendSuccessfulRedirect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConditionalRedirect);
