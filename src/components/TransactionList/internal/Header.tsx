import * as React from "react";
import { styled } from "linaria/react";
import * as moment from "moment";

export const headerHeight = 40;

const TransactionListHeaderBox = styled.div`
    width: 100%;
    height: ${headerHeight}px;
    padding: 10px 10px 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--gray3);
`;

export type TransactionListHeaderProps = {
    date: Date;
};

export const TransactionListHeader: React.SFC<TransactionListHeaderProps> = ({ date }) => {
    const dateString = moment(date).calendar(undefined, {
        lastWeek: "dddd, Do MMMM",
        lastDay: "[Yesterday]",
        sameDay: "[Today]",
        nextDay: "[Tomorrow]",
        nextWeek: "dddd, Do MMMM",
        sameElse: "dddd, Do MMMM",
    });

    return <TransactionListHeaderBox>{dateString}</TransactionListHeaderBox>;
};
