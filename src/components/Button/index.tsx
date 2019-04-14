import * as React from "react";
import { styled } from "linaria/react";

const ButtonBox = styled.a`
    background: var(--primary);
    height: 44px;
    width: 100%;
    border-radius: 999px;
    font-size: 18px;
    font-weight: 600;

    &,
    &:link,
    &:visited,
    &:hover,
    &:active {
        color: var(--gray6);
    }

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`;

export type ButtonProps = JSX.IntrinsicElements["a"] & {
    //
};

export const Button: React.SFC<ButtonProps> = ({ ...props }) => {
    return <ButtonBox {...props} />;
};
