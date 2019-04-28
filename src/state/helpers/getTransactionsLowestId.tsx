import { AppState } from "../store";

export const getTransactionsLowestId = (state: AppState, accountId: number): number | undefined => {
    const sortedFetches = state.accounts.transactionsFetches
        .filter(q => q.accountId === accountId)
        .filter(q => q.status === "success")
        .sort(
            (a, b) =>
                (a.beforeId !== undefined ? a.beforeId : Number.MAX_SAFE_INTEGER) -
                (b.beforeId !== undefined ? b.beforeId : Number.MAX_SAFE_INTEGER)
        );

    if (sortedFetches.length === 0) {
        return undefined;
    }

    const lowestIdFetch = sortedFetches[0];
    if (lowestIdFetch.status !== "success" || lowestIdFetch.data.length === 0) {
        return undefined;
    }

    const sortedTransactions = lowestIdFetch.data.sort((a, b) => a.id - b.id);

    const lowestIdTransaction = sortedTransactions[0];
    return lowestIdTransaction.id;
};
