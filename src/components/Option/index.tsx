import * as React from "react";
import { styled } from "linaria/react";

import { OptionTitle } from "./internal/Title";
import { OptionDescription } from "./internal/Description";
import { Icon } from "../Icon";
import { OptionRightBox } from "./internal/RightBox";
import { IconType } from "../Icon/Type";

export const OptionBox = styled.div`
    height: 50px;

    svg {
        fill: var(--primary);
    }

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export type OptionProps = {
    icon: IconType | React.ReactNode;
    title: string;
    description?: string;
    className?: string;
};

export const Option: React.SFC<OptionProps> = ({ icon, title, description, className }) => {
    const iconElement = typeof icon === "string" ? <Icon type={icon as IconType} /> : icon;

    return (
        <OptionBox className={className}>
            {iconElement}
            <OptionRightBox>
                <OptionTitle>{title}</OptionTitle>
                {description ? <OptionDescription>{description}</OptionDescription> : undefined}
            </OptionRightBox>
        </OptionBox>
    );
};
