import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { Transaction } from "src/models/Transaction";
import { TransactionList } from "src/components/TransactionList";
import { transactionsFetchThunk } from "src/state/accounts/thunks/transactionsFetchThunk";
import { AppDispatch } from "src/state/types";
import { TransactionListEntry } from "src/components/TransactionList/Entry";
import { TransactionsFetchState } from "src/state/accounts/state";
import { getDate } from "src/helpers/getDate";

// TODO [RM]: possible performance issues, check and improve if needed (fetchesToEntries if called often).

export type TransactionListContainerProps = {
    height: number;
};

const fetchesToEntries = (fetches: TransactionsFetchState[]): TransactionListEntry[] => {
    const transactions: Transaction[] = fetches.reduce(
        (prev, curr) => {
            if (curr.status !== "success") {
                return prev;
            }
            return [...prev, ...curr.data];
        },
        [] as Transaction[]
    );

    const sortedTransactions = transactions.sort((a, b) => b.date.getTime() - a.date.getTime());

    let lastDate: Date | undefined;
    const entries: TransactionListEntry[] = [];
    for (const transaction of sortedTransactions) {
        const date = getDate(transaction.date);

        if (!lastDate || date.getTime() !== lastDate.getTime()) {
            entries.push({
                type: "header",
                date: date,
            });
            lastDate = date;
        }

        entries.push({
            type: "transaction",
            transaction: transaction,
        });
    }

    return entries;
};

const mapStateToProps = (state: AppState, ownProps: TransactionListContainerProps) => {
    const currentAccountId = state.accounts.currentAccountId;

    const fetches = state.accounts.transactionsFetches
        .filter(q => q.accountId === currentAccountId)
        .filter(q => q.status === "success");

    const entries = fetchesToEntries(fetches);

    return {
        height: ownProps.height,
        accountId: currentAccountId,
        entries: entries,
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        getMore: () => {
            dispatch(transactionsFetchThunk());
        },
    };
};

export const TransactionListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionList);
