import * as React from "react";
import { Icon } from "../Icon";
import { styled } from "linaria/react";
import { IconType } from "../Icon/Type";
import { Link, LinkProps } from "react-router-dom";

const QuickMenuItemBox = styled(Link)`
    & > svg {
        fill: var(--primary);
    }
`;

export type QuickMenuItemProps = LinkProps & {
    icon: IconType;
};

export const QuickMenuItem: React.SFC<QuickMenuItemProps> = ({ icon, ...rest }) => {
    return (
        <QuickMenuItemBox {...rest}>
            <Icon type={icon} />
        </QuickMenuItemBox>
    );
};
