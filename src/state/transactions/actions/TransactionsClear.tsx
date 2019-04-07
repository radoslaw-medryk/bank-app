import { TransactionsActionType } from "./TransactionsAction";

export type TransactionsClear = {
    type: TransactionsActionType.Clear;
};

export const transactionsClear = (): TransactionsClear => ({
    type: TransactionsActionType.Clear,
});
