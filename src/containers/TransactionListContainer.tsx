import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { Transaction } from "src/models/Transaction";
import { TransactionList } from "src/components/TransactionList";
import { transactionsFetchThunk } from "src/state/transactions/thunks/transactionsFetchThunk";
import { AppDispatch } from "src/state/types";

export type TransactionListContainerProps = {
    height: number;
};

const mapStateToProps = (state: AppState, ownProps: TransactionListContainerProps) => {
    let latestTransactions: Transaction[] = [];
    for (const fetch of state.transactions.fetches) {
        if (fetch.status === "success") {
            latestTransactions = fetch.data;
        }
    }

    return {
        newItems: latestTransactions,
        height: ownProps.height,
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
