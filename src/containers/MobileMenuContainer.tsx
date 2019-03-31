import * as React from "react";
import { MobileMenu } from "src/components/MobileMenu";
import { MobileMenuItem } from "src/components/MobileMenu/Item";
import { IconType } from "src/components/Icon";

export type MobileMenuContainerProps = {
    //
};

type ItemType = {
    title: string;
    icon: IconType;
    href: string;
};

export const MobileMenuContainer: React.SFC<MobileMenuContainerProps> = ({}) => {
    const items: ItemType[] = [
        { title: "Accounts", icon: "Wallet", href: "#" },
        { title: "Transfer", icon: "Transfer", href: "#" },
        { title: "Cards", icon: "Cards", href: "#" },
        { title: "More", icon: "More", href: "#" },
    ];

    return (
        <MobileMenu>
            {items.map(q => {
                const isActive = q.title === "Accounts"; // TODO [RM]:

                return <MobileMenuItem key={q.title} title={q.title} icon={q.icon} isActive={isActive} href={q.href} />;
            })}
        </MobileMenu>
    );
};
