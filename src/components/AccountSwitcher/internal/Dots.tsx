import * as React from "react";
import { styled } from "linaria/react";

type DotProps = {
    isSelected: boolean;
};

const DotBox = styled.div`
    width: 8px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const Dot = styled.div<DotProps>`
    height: ${props => (props.isSelected ? 6 : 4)}px;
    width: ${props => (props.isSelected ? 6 : 4)}px;
    background: ${props => (props.isSelected ? "var(--gray2)" : "var(--gray4)")};
    border-radius: 999px;
`;

const Box = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
`;

export type DotsProps = {
    total: number;
    index: number;
};

export const AccountSwitcherDots: React.SFC<DotsProps> = ({ total, index }) => {
    let dots: React.ReactNode[] = [];
    for (let i = 0; i < total; i++) {
        dots = [
            ...dots,
            <DotBox key={i}>
                <Dot isSelected={i === index} />
            </DotBox>,
        ];
    }

    return <Box>{dots}</Box>;
};
