import { connect } from "react-redux";
import { TransferToFriend, TransferToFriendProps } from "src/components/TransferToFriend";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { accountSetCurrent } from "src/state/accounts/actions/AccountSetCurrent";
import { Account } from "src/models/Account";
import Big from "big.js";
import { AreaKey, TransferFriendKey } from "src/state/ui/state";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { uiSetErrors } from "src/state/ui/actions/UiSetErrors";
import { transferFriendThunk } from "src/state/friends/thunks/transferFriendThunk";

const areaKey: AreaKey = "transferFriend";
const valueField: TransferFriendKey = "amount";

export type TransferToFriendContainerProps = {
    friendId: number;
    onClose?: () => void;
};

const mapStateToProps = (state: AppState, ownProps: TransferToFriendContainerProps) => {
    const transferFriendFetch = state.friends.transferFriendFetch;
    const friendsFetch = state.friends.friendsFetch;

    const isInProgress = !!transferFriendFetch && transferFriendFetch.status === "loading";

    const friend =
        friendsFetch && friendsFetch.status === "success"
            ? friendsFetch.data.find(q => q.id === ownProps.friendId)
            : undefined;

    const accountsFetch = state.accounts.accountsFetch;

    const availableAccounts = accountsFetch && accountsFetch.status === "success" ? accountsFetch.data : [];
    const selectedAccount = availableAccounts.find(q => q.id === state.accounts.currentAccountId);

    const uiFields = state.ui.fields[areaKey] || {};
    const uiErrors = state.ui.errors[areaKey] || {};

    const valueStr = uiFields[valueField];
    const value = valueStr !== undefined ? new Big(valueStr) : undefined;

    const valueError = uiErrors[valueField];

    return {
        isInProgress: isInProgress,
        friend: friend,
        onClose: ownProps.onClose,
        accounts: availableAccounts,
        selectedAccount: selectedAccount,
        value: value,

        valueError: valueError,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: TransferToFriendContainerProps) => {
    const _onSubmit = (value: Big | undefined, selectedAccount: Account | undefined) => {
        if (!selectedAccount) {
            dispatch(uiSetErrors(areaKey, [valueField], "Invalid currency selected"));
            return;
        }

        if (!value) {
            dispatch(uiSetErrors(areaKey, [valueField], "Invalid value"));
            return;
        }

        if (value.lte(0)) {
            dispatch(uiSetErrors(areaKey, [valueField], "Must be greater than zero"));
            return;
        }

        if (selectedAccount.balance.value.lt(value)) {
            dispatch(uiSetErrors(areaKey, [valueField], "Insufficient funds"));
            return;
        }

        dispatch(uiSetErrors(areaKey, [valueField], undefined));

        dispatch(transferFriendThunk(selectedAccount.id, ownProps.friendId, value));
    };

    const setValue = (value: Big | undefined) => {
        dispatch(uiSetErrors(areaKey, [valueField], undefined));
        dispatch(uiSetField(areaKey, valueField, value && value.toString()));
    };

    const setSelectedAccount = (account: Account) => {
        dispatch(uiSetErrors(areaKey, [valueField], undefined));
        dispatch(accountSetCurrent(account.id));
    };

    return {
        setSelectedAccount: setSelectedAccount,
        setValue: setValue,
        _onSubmit: _onSubmit,
    };
};

type PropsFromState = ReturnType<typeof mapStateToProps>;
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: PropsFromState, dispatchProps: PropsFromDispatch): TransferToFriendProps => {
    const { _onSubmit, ...passedDispatchProps } = dispatchProps;

    const onSubmit = () => {
        _onSubmit(stateProps.value, stateProps.selectedAccount);
    };

    return {
        ...stateProps,
        ...passedDispatchProps,

        onSubmit: onSubmit,
    };
};

export const TransferToFriendContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TransferToFriend);
