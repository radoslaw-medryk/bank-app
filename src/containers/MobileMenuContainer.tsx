import * as React from "react";
import { MobileMenu } from "src/components/MobileMenu";
import { MobileMenuItem } from "src/components/MobileMenu/Item";
import { IconType } from "src/components/Icon/Type";

type ItemType = {
    title: string;
    icon: IconType;
    to: string;
};

export type MobileMenuContainerProps = {
    //
};

export const MobileMenuContainer: React.SFC<MobileMenuContainerProps> = ({}) => {
    const items: ItemType[] = [
        { title: "Accounts", icon: "Wallet", to: "/accounts" },
        { title: "Transfer", icon: "Transfer", to: "/transfer" },
        { title: "Cards", icon: "Cards", to: "/cards" },
        { title: "More", icon: "More", to: "/more" },
    ];

    return (
        <MobileMenu>
            {items.map(q => {
                return <MobileMenuItem key={q.title} title={q.title} icon={q.icon} to={q.to} />;
            })}
        </MobileMenu>
    );
};
