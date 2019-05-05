import { connect } from "react-redux";
import * as React from "react";
import { Redirect } from "react-router";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { transferFriendFetchReset } from "src/state/friends/actions/TransferFriendFetchReset";

type TransferFriendSuccessfulRedirectInnerProps = {
    isSuccessfulTransfer: boolean;
    resetTransferStatus: () => void;
    to: string;
};

const TransferFriendSuccessfulRedirectInner: React.SFC<TransferFriendSuccessfulRedirectInnerProps> = ({
    to,
    isSuccessfulTransfer,
    resetTransferStatus,
}) => {
    React.useEffect(() => {
        if (isSuccessfulTransfer) {
            resetTransferStatus();
        }
    }, [isSuccessfulTransfer]);

    if (!isSuccessfulTransfer) {
        return null;
    }

    return <Redirect to={to} />;
};

export type TransferFriendSuccessfulRedirectProps = {
    to: string;
};

const mapStateToProps = (state: AppState, ownProps: TransferFriendSuccessfulRedirectProps) => {
    const fetch = state.friends.transferFriendFetch;
    const isSuccessfulTransfer = !!fetch && fetch.status === "success";

    return {
        isSuccessfulTransfer: isSuccessfulTransfer,
        to: ownProps.to,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    resetTransferStatus: () => dispatch(transferFriendFetchReset()),
});

export const TransferFriendSuccessfulRedirect = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransferFriendSuccessfulRedirectInner);
