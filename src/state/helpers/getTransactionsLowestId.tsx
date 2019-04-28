import { AppState } from "../store";
import { Transaction } from "src/models/Transaction";

export const getTransactionsLowestId = (state: AppState, accountId: number): number | undefined => {
    const fetches = state.accounts.transactionsFetches.filter(q => q.accountId === accountId);

    const transactions = fetches.reduce(
        (prev, curr) => {
            if (curr.status !== "success") {
                return prev;
            }

            return [...prev, ...curr.data];
        },
        [] as Transaction[]
    );

    if (transactions.length === 0) {
        return undefined;
    }

    const sortedTransactions = transactions.sort((a, b) => a.id - b.id);

    const lowestIdTransaction = sortedTransactions[0];
    return lowestIdTransaction.id;
};
