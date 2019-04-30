import { styled } from "linaria/react";
import { TextFieldMode } from "./Mode";

export type TextFieldHintProps = {
    mode: TextFieldMode;
};

export const TextFieldHint = styled.div<TextFieldHintProps>`
    margin: 2px 0 0 0;
    text-align: right;
    font-size: 11px;
    color: ${props => (props.mode === "error" ? "var(--red)" : "var(--gray2)")};
    height: 13px;
`;
