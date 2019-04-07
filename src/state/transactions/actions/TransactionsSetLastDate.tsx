import { TransactionsActionType } from "./TransactionsAction";

export type TransactionsSetLastDate = {
    type: TransactionsActionType.SetLastDate;
    lastDate: Date | undefined;
};

export const transactionsSetLastDate = (lastDate: Date | undefined): TransactionsSetLastDate => ({
    type: TransactionsActionType.SetLastDate,
    lastDate: lastDate,
});
