import * as React from "react";
import { styled } from "linaria/react";

const InfiniteScrollBox = styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`;

export type InfiniteScrollProps = {
    isLoading: boolean;
    onNextBatchRequested: () => void;
    children: React.ReactNode;
};

export const InfiniteScroll: React.SFC<InfiniteScrollProps> = ({ isLoading, onNextBatchRequested, children }) => {
    const boxRef = React.useRef<HTMLDivElement>(null);
    const [isNextBatchRequested, setIsNextBatchRequested] = React.useState(false);

    React.useEffect(() => {
        if (!isLoading) {
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

        const scrollLeftTrigger = 50; // TODO [RM]: customizable
        const maxPossibleScroll = scrollHeight - clientHeight;
        const possibleScrollLeft = maxPossibleScroll - scrollTop;

        const isNextBactchConditionMeet =
            (maxPossibleScroll > scrollLeftTrigger && possibleScrollLeft <= scrollLeftTrigger) ||
            (maxPossibleScroll <= scrollLeftTrigger && scrollTop > 0);

        if (isNextBactchConditionMeet && isLoading !== undefined && !isNextBatchRequested) {
            onNextBatchRequested();
            setIsNextBatchRequested(true);
        }
    };

    return (
        <InfiniteScrollBox ref={boxRef} onScroll={onScroll}>
            {children}
        </InfiniteScrollBox>
    );
};
