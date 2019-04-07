import * as React from "react";
import { TransactionListContainer } from "src/containers/TransactionListContainer";
import { store } from "src/state/store";
import { transactionsFetchThunk } from "src/state/transactions/thunks/transactionsFetchThunk";

export type TestProps = {
    //
};

export const Test: React.SFC<TestProps> = ({}) => {
    React.useEffect(() => {
        store.dispatch(transactionsFetchThunk() as any);
    }, []);

    return (
        <div>
            <TransactionListContainer height={300} />
        </div>
    );
};
