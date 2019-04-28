import { AccountsActionType } from "./AccountsAction";

export type TransactionsClear = {
    type: AccountsActionType.TransactionsClear;
};

export const transactionsClear = (): TransactionsClear => ({
    type: AccountsActionType.TransactionsClear,
});
