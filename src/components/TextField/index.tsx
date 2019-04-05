import * as React from "react";
import { styled } from "linaria/react";
import { TextFieldLabel } from "./Label";
import { TextFieldInput } from "./Input";
import { TextFieldIcon } from "./Icon";
import { Icon, IconType } from "../Icon";

const TextFieldBox = styled.div`
    height: 40px;
    border-bottom: 1px solid var(--gray2);

    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

export type TextFieldProps = {
    placeholder?: string;
    label?: string;
    icon?: IconType;
    iconOnClick?: () => void;
    value?: string;
    onChange?: (newValue: string) => void;
};

export const TextField: React.SFC<TextFieldProps> = ({ placeholder, label, icon, iconOnClick, value, onChange }) => {
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!onChange) {
            return;
        }

        const newValue = event.currentTarget.value;
        onChange(newValue);
    };

    const iconElement = icon ? (
        <TextFieldIcon onClick={iconOnClick}>
            <Icon type={icon} />
        </TextFieldIcon>
    ) : (
        undefined
    );

    return (
        <TextFieldBox>
            <TextFieldLabel>{label}</TextFieldLabel>
            <TextFieldInput placeholder={placeholder} value={value} onChange={onInputChange} />
            {iconElement}
        </TextFieldBox>
    );
};
