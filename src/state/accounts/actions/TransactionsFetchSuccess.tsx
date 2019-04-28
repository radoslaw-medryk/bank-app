import { TransactionsFetchStateData } from "../state";
import { AccountsActionType } from "./AccountsAction";
import { FetchId } from "src/state/FetchState";

export type TransactionsFetchSuccess = {
    type: AccountsActionType.TransactionsFetchSuccess;
    id: FetchId;
    data: TransactionsFetchStateData;
};

export const transactionsFetchSuccess = (id: FetchId, data: TransactionsFetchStateData): TransactionsFetchSuccess => ({
    type: AccountsActionType.TransactionsFetchSuccess,
    id: id,
    data: data,
});
