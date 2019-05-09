import { styled } from "linaria/react";
import { MoneyFieldMode } from "../Mode";

export type MoneyFieldWrapperProps = {
    mode: MoneyFieldMode;
};

export const MoneyFieldWrapper = styled.div<MoneyFieldWrapperProps>`
    padding: 0 0 2px 0;
    border-bottom: ${props => (props.mode === "error" ? "1px solid var(--red)" : "none")};
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;
