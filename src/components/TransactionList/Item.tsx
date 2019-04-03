import * as React from "react";
import { styled } from "linaria/react";
import { Transaction } from "src/models/Transaction";

const TransactionListItemBox = styled.div`
    width: 100%;
    height: 30px;
`;

export type TransactionListItemProps = {
    transaction: Transaction;
};

export const TransactionListItem: React.SFC<TransactionListItemProps> = ({ transaction }) => {
    return (
        <TransactionListItemBox>
            [{transaction.id}] {transaction.title}
        </TransactionListItemBox>
    );
};
