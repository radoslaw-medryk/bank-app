import { styled } from "linaria/react";
import { TextFieldMode } from "../Mode";

export type TextFieldWrapperProps = {
    mode: TextFieldMode;
};

export const TextFieldWrapper = styled.div<TextFieldWrapperProps>`
    border-bottom: ${props => (props.mode === "error" ? "1px solid var(--red)" : "none")};
    width: 100%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;
