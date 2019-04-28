import { styled } from "linaria/react";
import * as React from "react";

type TransactionListNoOperationsBoxProps = {
    height: number;
};

const TransactionListNoOperationsBox = styled.div<TransactionListNoOperationsBoxProps>`
    height: ${props => props.height}px;
    padding: 30px;
    font-size: 15px;
    color: var(--gray3);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;

export type TransactionListNoOperationsProps = {
    height: number;
};

export const TransactionListNoOperations: React.SFC<TransactionListNoOperationsProps> = ({ height }) => {
    return (
        <TransactionListNoOperationsBox height={height}>
            There are no operations here yet.
        </TransactionListNoOperationsBox>
    );
};
