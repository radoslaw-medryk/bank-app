import * as React from "react";

export type IconType =
    | "Accounts"
    | "Add"
    | "Close"
    | "Exchange"
    | "Search"
    | "Wallet"
    | "Transfer"
    | "Cards"
    | "More"
    | "Groceries"
    | "Restaurant"
    | "Transport";

export type IconProps = {
    type: IconType;
};

export const Icon: React.SFC<IconProps> = ({ type, ...rest }) => {
    const IconSvg = require(`../assets/icons/${type}.svg`).default;
    return <IconSvg {...rest} />;
};
