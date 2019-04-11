import { TransactionsActionType } from "./TransactionsAction";

export type TransactionsSetLastId = {
    type: TransactionsActionType.SetLastId;
    lastId: number | undefined;
};

export const transactionsSetLastId = (lastId: number | undefined): TransactionsSetLastId => ({
    type: TransactionsActionType.SetLastId,
    lastId: lastId,
});
