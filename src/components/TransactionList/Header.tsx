import * as React from "react";
import { styled } from "linaria/react";

export const headerHeight = 20;

const TransactionListHeaderBox = styled.div`
    width: 100%;
    height: ${headerHeight}px;
    background: limegreen;
`;

export type TransactionListHeaderProps = {
    date: Date;
};

export const TransactionListHeader: React.SFC<TransactionListHeaderProps> = ({ date }) => {
    return <TransactionListHeaderBox>== {date.toString()} ==</TransactionListHeaderBox>;
};
