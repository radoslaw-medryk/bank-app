import { connect } from "react-redux";
import { TransferToFriend, TransferToFriendProps } from "src/components/TransferToFriend";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { accountSetCurrent } from "src/state/accounts/actions/AccountSetCurrent";
import { Account } from "src/models/Account";
import { Currency } from "src/models/Currency";

export type TransferToFriendContainerProps = {
    friendId: number;
    onClose?: () => void;
};

const mapStateToProps = (state: AppState, ownProps: TransferToFriendContainerProps) => {
    const friendsFetch = state.friends.friendsFetch;

    const friend =
        friendsFetch && friendsFetch.status === "success"
            ? friendsFetch.data.find(q => q.id === ownProps.friendId)
            : undefined;

    const accountsFetch = state.accounts.accountsFetch;

    const availableAccounts = accountsFetch && accountsFetch.status === "success" ? accountsFetch.data : [];
    const selectedAccount = availableAccounts.find(q => q.id === state.accounts.currentAccountId);

    const availableCurrencies = availableAccounts.map(q => q.balance.currency);
    const selectedCurrency = selectedAccount ? selectedAccount.balance.currency : undefined;

    return {
        friend: friend,
        onClose: ownProps.onClose,
        currencies: availableCurrencies,
        selectedCurrency: selectedCurrency,

        _accounts: availableAccounts,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    _setSelectedAccount: (account: Account) => dispatch(accountSetCurrent(account.id)),
});

type PropsFromState = ReturnType<typeof mapStateToProps>;
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: PropsFromState, dispatchProps: PropsFromDispatch): TransferToFriendProps => {
    const { _accounts, ...passingStateProps } = stateProps;
    const { _setSelectedAccount, ...passingDispatchProps } = dispatchProps;

    const setSelectedCurrency = (currency: Currency) => {
        const account = _accounts.find(q => q.balance.currency === currency);
        account && _setSelectedAccount(account);
    };

    return {
        ...passingStateProps,
        ...passingDispatchProps,

        setSelectedCurrency: setSelectedCurrency,
    };
};

export const TransferToFriendContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TransferToFriend);
