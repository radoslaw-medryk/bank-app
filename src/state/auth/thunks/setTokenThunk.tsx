import { AppDispatch } from "src/state/types";
import { accountsFetchThunk } from "src/state/accounts/thunks/accountsFetchThunk";
import { authSetToken } from "../actions/AuthSetToken";
import { authSetProfile } from "../actions/AuthSetProfile";
import { accountsClear } from "src/state/accounts/actions/AccountsClear";
import { transactionsClear } from "src/state/accounts/actions/TransactionsClear";
import { accountSetCurrent } from "src/state/accounts/actions/AccountSetCurrent";
import { friendsReset } from "src/state/friends/actions/FriendsReset";

export const setTokenThunk = (token: string | undefined, expiresAt: Date | undefined, email: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        dispatch(authSetToken(token, expiresAt));
        dispatch(authSetProfile(email));

        dispatch(accountsClear());
        dispatch(transactionsClear());
        dispatch(accountSetCurrent(undefined));
        dispatch(friendsReset());

        if (!token) {
            return;
        }

        dispatch(accountsFetchThunk());
    };
};
