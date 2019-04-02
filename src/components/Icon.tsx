import * as React from "react";

export type IconType = "Wallet" | "Transfer" | "Cards" | "More";

export type IconProps = {
    type: IconType;
};

export const Icon: React.SFC<IconProps> = ({ type, ...rest }) => {
    const IconSvg = require(`../assets/icons/${type}.svg`).default;
    return <IconSvg {...rest} />;
};
