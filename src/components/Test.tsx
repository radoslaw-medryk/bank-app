import * as React from "react";
import { TransactionListContainer } from "src/containers/TransactionListContainer";

export type TestProps = {
    //
};

export const Test: React.SFC<TestProps> = ({}) => {
    return (
        <div>
            <TransactionListContainer height={300} />
        </div>
    );
};
