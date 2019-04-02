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
    const switcherRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (switcherRef.current) {
            const scrollWidth = switcherRef.current.scrollWidth;
            const newScrollLeft = (scrollWidth / elementCount) * (initialIndex || 0);
            switcherRef.current.scrollLeft = newScrollLeft;
        }
    }, []);

    const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = event.currentTarget.scrollLeft;
        const scrollWidth = event.currentTarget.scrollWidth;

        const newIndex = Math.round(scrollLeft / (scrollWidth / elementCount));
        if (newIndex !== index) {
            setIndex(newIndex);
            onSelectedAccountChanged && onSelectedAccountChanged(newIndex);
        }
    };

    return (
        <div>
            <AccountSwitcherBox ref={switcherRef} onScroll={onScroll}>
                {accounts.map(q => (
                    <AccountSwitcherAccount key={q.currency.symbol} balance={q} />
                ))}
            </AccountSwitcherBox>
            <AccountSwitcherDots total={elementCount} index={index} />
        </div>
    );
};
