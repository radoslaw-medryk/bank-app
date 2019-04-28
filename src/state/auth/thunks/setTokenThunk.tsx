import { AppDispatch } from "src/state/types";
import { accountsFetchThunk } from "src/state/accounts/thunks/accountsFetchThunk";
import { authSetToken } from "../actions/AuthSetToken";

export const setTokenThunk = (token: string | undefined, expiresAt: Date | undefined) => {
    return async (dispatch: AppDispatch) => {
        dispatch(authSetToken(token, expiresAt));

        // TODO [RM]: clear accounts, transactions, etc.

        if (!token) {
            return;
        }

        dispatch(accountsFetchThunk());
    };
};
