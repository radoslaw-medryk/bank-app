import { connect } from "react-redux";
import { AccountSwitcher, AccountSwitcherProps } from "src/components/AccountSwitcher";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { accountSetCurrent } from "src/state/accounts/actions/AccountSetCurrent";

const mapStateToProps = (state: AppState): AccountSwitcherProps => {
    const accountsFetch = state.accounts.accountsFetch;
    const accounts = accountsFetch && accountsFetch.status === "success" ? accountsFetch.data : [];

    const currentAccountId = state.accounts.currentAccountId;
    let index = accounts.findIndex(q => q.id === currentAccountId);
    if (index < 0) {
        index = 0;
    }

    return {
        accounts: accounts,
        index: index,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    _onSelectedAccountChanged: (accountId: number | undefined) => dispatch(accountSetCurrent(accountId)),
});

type PropsFromState = ReturnType<typeof mapStateToProps>;
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: PropsFromState, dispatchProps: PropsFromDispatch): AccountSwitcherProps => {
    const { _onSelectedAccountChanged, ...restDispatchProps } = dispatchProps;

    return {
        ...stateProps,
        ...restDispatchProps,
        onSelectedAccountChanged: (index: number) => {
            const account = stateProps.accounts[index];
            const accountId = !!account ? account.id : undefined;
            _onSelectedAccountChanged(accountId);
        },
    };
};

export const AccountSwitcherContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AccountSwitcher);
