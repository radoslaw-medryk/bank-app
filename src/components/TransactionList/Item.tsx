import * as React from "react";
import { styled } from "linaria/react";
import { Transaction } from "src/models/Transaction";

export const itemHeight = 30;

const TransactionListItemBox = styled.div`
    width: 100%;
    height: ${itemHeight}px;
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
