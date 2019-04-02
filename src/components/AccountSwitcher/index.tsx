import * as React from "react";
import { styled } from "linaria/react";
import { Money } from "src/models/Money";
import { AccountSwitcherAccount } from "./internal/Account";
import { AccountSwitcherDots } from "./internal/Dots";

const AccountSwitcherBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    & > * {
        flex: 0 0 100%;
        scroll-snap-align: center;
    }
`;

export type OnSelectedAccountChangedFunc = (index: number) => void;

export type AccountSwitcherProps = {
    accounts: Money[];
    initialIndex?: number;
    onSelectedAccountChanged?: OnSelectedAccountChangedFunc;
};

export const AccountSwitcher: React.SFC<AccountSwitcherProps> = ({
    accounts,
    initialIndex,
    onSelectedAccountChanged,
}) => {
    const elementCount = accounts.length;

    const [index, setIndex] = React.useState(initialIndex || 0);
    const boxRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (boxRef.current) {
            const scrollWidth = boxRef.current.scrollWidth;
            const newScrollLeft = (scrollWidth / elementCount) * (initialIndex || 0);
            boxRef.current.scrollLeft = newScrollLeft;
        }
    }, []);

    const onScroll = () => {
        if (!boxRef.current) {
            return;
        }

        const scrollLeft = boxRef.current.scrollLeft;
        const scrollWidth = boxRef.current.scrollWidth;

        const newIndex = Math.round(scrollLeft / (scrollWidth / elementCount));
        if (newIndex !== index) {
            setIndex(newIndex);
            onSelectedAccountChanged && onSelectedAccountChanged(newIndex);
        }
    };

    return (
        <div>
            <AccountSwitcherBox ref={boxRef} onScroll={onScroll}>
                {accounts.map(q => (
                    <AccountSwitcherAccount key={q.currency.symbol} balance={q} />
                ))}
            </AccountSwitcherBox>
            <AccountSwitcherDots total={elementCount} index={index} />
        </div>
    );
};
