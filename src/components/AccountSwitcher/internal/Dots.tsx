import * as React from "react";
import { styled } from "linaria/react";

type AccountSwitcherDotProps = {
    isSelected: boolean;
};

const AccountSwitcherDotBox = styled.div`
    width: 8px;
    height: 6px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const AccountSwitcherDot = styled.div<AccountSwitcherDotProps>`
    height: ${props => (props.isSelected ? 6 : 4)}px;
    width: ${props => (props.isSelected ? 6 : 4)}px;
    background: ${props => (props.isSelected ? "var(--gray2)" : "var(--gray4)")};
    border-radius: 999px;
`;

const AccountSwitcherBox = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

export type AccountSwitcherDotsProps = {
    total: number;
    index: number;
};

export const AccountSwitcherDots: React.SFC<AccountSwitcherDotsProps> = ({ total, index }) => {
    let dots: React.ReactNode[] = [];
    for (let i = 0; i < total; i++) {
        dots = [
            ...dots,
            <AccountSwitcherDotBox key={i}>
                <AccountSwitcherDot isSelected={i === index} />
            </AccountSwitcherDotBox>,
        ];
    }

    return <AccountSwitcherBox>{dots}</AccountSwitcherBox>;
};
