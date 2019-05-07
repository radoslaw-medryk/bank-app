import * as React from "react";
import { styled } from "linaria/react";
import { AccountSwitcherAccount } from "./internal/Account";
import { AccountSwitcherDots } from "./internal/Dots";
import { Account } from "src/models/Account";
import { AccountSwitcherAccountPlaceholder } from "./internal/AccountPlaceholder";

const AccountSwitcherBox = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    margin: 8px 0 0;

    display: flex;
    flex-flow: row nowrap;

    & > * {
        flex: 0 0 100%;
        scroll-snap-align: center;
    }
`;

export type OnSelectedAccountChangedFunc = (index: number) => void;

export type AccountSwitcherProps = {
    accounts: Account[];
    index: number;
    onSelectedAccountChanged?: OnSelectedAccountChangedFunc;
};

export const AccountSwitcher: React.SFC<AccountSwitcherProps> = ({ accounts, index, onSelectedAccountChanged }) => {
    const elementCount = accounts.length;

    const boxRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (boxRef.current) {
            const scrollWidth = boxRef.current.scrollWidth;
            const scrollLeft = boxRef.current.scrollLeft;
            const elementStep = scrollWidth / elementCount;

            if (scrollLeft % elementStep > 5) {
                // If current scrollLeft is not set at element (with error of 5px) we don't enforce scroll on DOM.
                // That is because user is currently actively scrolling and we don't want to disturb this.
                return;
            }

            const newScrollLeft = elementStep * index;
            boxRef.current.scrollLeft = newScrollLeft;
        }
    }, [index]);

    const onScroll = () => {
        if (!boxRef.current) {
            return;
        }

        const scrollLeft = boxRef.current.scrollLeft;
        const scrollWidth = boxRef.current.scrollWidth;

        const newIndex = Math.round(scrollLeft / (scrollWidth / elementCount));
        if (newIndex !== index) {
            onSelectedAccountChanged && onSelectedAccountChanged(newIndex);
        }
    };

    return (
        <div>
            <AccountSwitcherDots total={elementCount} index={index} />
            <AccountSwitcherBox ref={boxRef} onScroll={onScroll}>
                {accounts.length > 0 ? (
                    accounts.map(q => <AccountSwitcherAccount key={q.id} balance={q.balance} />)
                ) : (
                    <AccountSwitcherAccountPlaceholder />
                )}
            </AccountSwitcherBox>
        </div>
    );
};
