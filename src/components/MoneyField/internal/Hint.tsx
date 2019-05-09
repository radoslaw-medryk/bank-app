import { styled } from "linaria/react";
import { MoneyFieldMode } from "../Mode";

export type MoneyFieldHintProps = {
    mode: MoneyFieldMode;
};

export const MoneyFieldHint = styled.div<MoneyFieldHintProps>`
    margin: 2px 0 0 0;
    height: 15px;
    text-align: right;
    font-size: 11px;
    color: ${props => (props.mode === "error" ? "var(--red)" : "var(--gray2)")};
`;
