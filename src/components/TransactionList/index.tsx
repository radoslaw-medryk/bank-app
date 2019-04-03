import * as React from "react";
import { Transaction } from "src/models/Transaction";
import { TransactionListItem } from "./Item";
import { styled } from "linaria/react";
import { InfiniteScroll } from "src/components/InfiniteScroll";

type TransactionListBoxProps = JSX.IntrinsicElements["div"] & {
    isLoading?: boolean;
};

const TransactionListBox = styled.div<TransactionListBoxProps>`
    background: ${props => (props.isLoading ? "papayawhip" : "white")};
    height: 300px;
`;

export type TransactionListProps = {
    items: Transaction[];
    isLoading: boolean;
    onNextBatchRequested: () => void;
};

export const TransactionList: React.SFC<TransactionListProps> = ({ items, isLoading, onNextBatchRequested }) => {
    return (
        <TransactionListBox isLoading={isLoading}>
            <InfiniteScroll isLoading={isLoading} onNextBatchRequested={onNextBatchRequested}>
                {items.map(q => (
                    <TransactionListItem key={q.id} transaction={q} />
                ))}
            </InfiniteScroll>
        </TransactionListBox>
    );
};
