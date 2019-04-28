import { connect } from "react-redux";
import { AccountSwitcher, AccountSwitcherProps } from "src/components/AccountSwitcher";
import { AppState } from "src/state/store";

const mapStateToProps = (state: AppState): AccountSwitcherProps => {
    const accountsFetch = state.accounts.accountsFetch;
    const accounts = accountsFetch && accountsFetch.status === "success" ? accountsFetch.data : undefined;

    return {
        accounts: accounts || [], // TODO [RM]: TEMP
    };
};

export const AccountSwitcherContainer = connect(mapStateToProps)(AccountSwitcher);
