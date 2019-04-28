import { AccountsActionType } from "./AccountsAction";
import { FetchId } from "src/state/FetchState";

export type TransactionsFetchStart = {
    type: AccountsActionType.TransactionsFetchStart;
    id: FetchId;
    accountId: number;
    beforeId: number | undefined;
};

export const transactionsFetchStart = (
    id: FetchId,
    accountId: number,
    beforeId: number | undefined
): TransactionsFetchStart => ({
    type: AccountsActionType.TransactionsFetchStart,
    id: id,
    accountId: accountId,
    beforeId: beforeId,
});
