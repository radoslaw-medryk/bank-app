import * as React from "react";
import { Icon } from "../Icon";
import { MobileMenuTitle } from "./internal/Title";
import { IconType } from "../Icon/Type";
import { styled } from "linaria/react";
import { NavLink, NavLinkProps } from "react-router-dom";

const MobileMenuItemBox = styled(NavLink)`
    text-decoration: none;
    padding: 10px 0 6px;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    svg {
        fill: var(--gray1);
    }

    &,
    &:link,
    &:visited,
    &:hover,
    &:active {
        color: var(--gray1);
    }

    &.active {
        color: var(--primary);
        svg {
            fill: var(--primary);
        }
    }
`;

export type MobileMenuItemProps = NavLinkProps & {
    icon: IconType;
    title: string;
};

export const MobileMenuItem: React.SFC<MobileMenuItemProps> = ({ icon, title, ...rest }) => {
    return (
        <MobileMenuItemBox {...rest}>
            <Icon type={icon} />
            <MobileMenuTitle>{title}</MobileMenuTitle>
        </MobileMenuItemBox>
    );
};
