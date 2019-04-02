import * as React from "react";
import { IconType, Icon } from "../Icon";
import { styled } from "linaria/react";

const QuickMenuItemBox = styled.a`
    & > svg {
        fill: var(--primary);
    }
`;

export type QuickMenuItemProps = JSX.IntrinsicElements["a"] & {
    icon: IconType;
};

export const QuickMenuItem: React.SFC<QuickMenuItemProps> = ({ icon, ...rest }) => {
    return (
        <QuickMenuItemBox {...rest}>
            <Icon type={icon} />
        </QuickMenuItemBox>
    );
};
