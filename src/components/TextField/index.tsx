import * as React from "react";
import { styled } from "linaria/react";
import { TextFieldInput } from "./internal/Input";
import { TextFieldIcon } from "./internal/Icon";
import { Icon } from "../Icon";
import { IconType } from "../Icon/Type";
import { TextFieldHint } from "./internal/Hint";
import { TextFieldWrapper } from "./internal/Wrapper";
import { TextFieldMode } from "./Mode";

const TextFieldBox = styled.div`
    width: 100%;
`;

export type TextFieldProps = {
    type?: string;
    placeholder?: string;
    hint?: string;
    mode?: TextFieldMode;
    icon?: IconType;
    iconOnClick?: () => void;
    value?: string;
    onChange?: (newValue: string) => void;
    className?: string;
};

export const TextField: React.SFC<TextFieldProps> = ({
    type,
    placeholder,
    hint,
    mode,
    icon,
    iconOnClick,
    value,
    onChange,
    className,
}) => {
    mode = mode || "default";

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
        <TextFieldBox className={className}>
            <TextFieldWrapper mode={mode}>
                <TextFieldInput type={type} placeholder={placeholder} value={value} onChange={onInputChange} />
                {iconElement}
            </TextFieldWrapper>
            <TextFieldHint mode={mode}>{hint}</TextFieldHint>
        </TextFieldBox>
    );
};
