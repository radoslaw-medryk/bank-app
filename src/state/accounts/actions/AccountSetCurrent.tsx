import { AccountsActionType } from "./AccountsAction";

export type AccountSetCurrent = {
    type: AccountsActionType.AccountSetCurrent;
    accountId: number | undefined;
};

export const accountSetCurrent = (accountId: number | undefined): AccountSetCurrent => ({
    type: AccountsActionType.AccountSetCurrent,
    accountId: accountId,
});
