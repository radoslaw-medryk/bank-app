import { transactionsFetchStart } from "../actions/TransactionFetchStart";
import { AppDispatch } from "src/state/types";
import { uniqueId } from "src/helpers/uniqueId";
import { mockTransactions } from "src/helpers/mock";
import { transactionsFetchSuccess } from "../actions/TransactionsFetchSuccess";
import { AppState } from "src/state/store";
import { transactionsSetLastDate } from "../actions/TransactionsSetLastDate";

export const transactionsFetchThunk = () => {
    return async (dispatch: AppDispatch, getState: () => AppState) => {
        const id = uniqueId();
        dispatch(transactionsFetchStart(id));

        const state = getState();
        const lastDate = state.transactions.lastDate || new Date();

        // TODO [RM]: dummy data so far
        await new Promise(r => setTimeout(r, 1000));

        const transactions = mockTransactions(50, lastDate);
        dispatch(transactionsFetchSuccess(id, transactions));

        const newLastDate = transactions[transactions.length - 1].date;
        dispatch(transactionsSetLastDate(newLastDate));
    };
};
