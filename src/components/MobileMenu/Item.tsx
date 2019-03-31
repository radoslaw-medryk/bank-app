import * as React from "react";
import { MobileMenuItemBox } from "./internal/ItemBox";
import { IconType, Icon } from "../Icon";
import classNames from "classnames";
import { MobileMenuTitle } from "./internal/Title";

export type MobileMenuItemProps = JSX.IntrinsicElements["a"] & {
    icon: IconType;
    title: string;
    isActive?: boolean;
};

export const MobileMenuItem: React.SFC<MobileMenuItemProps> = ({ icon, title, isActive, ...rest }) => {
    const className = classNames({
        active: isActive,
    });

    return (
        <MobileMenuItemBox {...rest} className={className}>
            <Icon type={icon} />
            <MobileMenuTitle>{title}</MobileMenuTitle>
        </MobileMenuItemBox>
    );
};
