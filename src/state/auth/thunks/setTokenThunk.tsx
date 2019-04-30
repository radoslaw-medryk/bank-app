import { AppDispatch } from "src/state/types";
import { accountsFetchThunk } from "src/state/accounts/thunks/accountsFetchThunk";
import { authSetToken } from "../actions/AuthSetToken";
import { authSetProfile } from "../actions/AuthSetProfile";

export const setTokenThunk = (token: string | undefined, expiresAt: Date | undefined, email: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        dispatch(authSetToken(token, expiresAt));
        dispatch(authSetProfile(email));

        // TODO [RM]: clear accounts, transactions, etc.

        if (!token) {
            return;
        }

        dispatch(accountsFetchThunk());
    };
};
