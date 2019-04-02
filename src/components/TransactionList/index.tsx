import * as React from "react";
import { Transaction } from "src/models/Transaction";
import { TransactionListItem } from "./Item";
import { styled } from "linaria/react";

type TransactionListBoxProps = JSX.IntrinsicElements["div"] & {
    isLoading?: boolean;
};

const TransactionListBox = styled.div<TransactionListBoxProps>`
    height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: ${props => (props.isLoading ? "papayawhip" : "white")};

    & > * {
        height: 30px;
    }
`;

export type TransactionListProps = {
    items: Transaction[];
    isLoading?: boolean;
    onNextBatchRequested?: () => void;
};

export const TransactionList: React.SFC<TransactionListProps> = ({ items, isLoading, onNextBatchRequested }) => {
    const boxRef = React.useRef<HTMLDivElement>(null);
    const [isNextBatchRequested, setIsNextBatchRequested] = React.useState(false);

    React.useEffect(() => {
        if (isLoading === false) {
            setIsNextBatchRequested(false);
        }
    }, [isLoading]);

    const onScroll = () => {
        if (!boxRef.current) {
            return;
        }

        const clientHeight = boxRef.current.clientHeight;
        const scrollHeight = boxRef.current.scrollHeight;
        const scrollTop = boxRef.current.scrollTop;

        // from 0 to 1:
        const scrollProgress = scrollTop / (scrollHeight - clientHeight);

        if (scrollProgress >= 0.95 && onNextBatchRequested && isLoading !== undefined && !isNextBatchRequested) {
            onNextBatchRequested();
            setIsNextBatchRequested(true);
        }
    };

    return (
        <TransactionListBox ref={boxRef} onScroll={onScroll} isLoading={isLoading}>
            {items.map(q => (
                <TransactionListItem key={q.id} transaction={q} />
            ))}
        </TransactionListBox>
    );
};
