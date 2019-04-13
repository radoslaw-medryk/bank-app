import * as React from "react";
import { IconType } from "./Type";

export type IconProps = {
    type: IconType;
    className?: string;
};

export const Icon: React.SFC<IconProps> = ({ type, ...rest }) => {
    const IconSvg = require(`../../assets/icons/${type}.svg`).default;
    return <IconSvg {...rest} />;
};
