import { AccountsActionType } from "./AccountsAction";

export type AccountsClear = {
    type: AccountsActionType.AccountsClear;
};

export const accountsClear = (): AccountsClear => ({
    type: AccountsActionType.AccountsClear,
});
