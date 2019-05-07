import * as React from "react";
import { Option } from "src/components/Option";
import { IconType } from "src/components/Icon/Type";
import { Icon } from "src/components/Icon";
import { ApiFriend } from "@radoslaw-medryk/bank-core-shared";

const maleIcons: IconType[] = ["Man1", "Man2"];
const femaleIcons: IconType[] = ["Woman1", "Woman2"];

export type FriendOptionProps = {
    friend: ApiFriend;
};

export const FriendOption: React.SFC<FriendOptionProps> = ({ friend }) => {
    const iconSet = friend.gender === "m" ? maleIcons : femaleIcons;
    const icon = iconSet[friend.name.length % iconSet.length]; // pseudo-"random" icon for now

    return <Option icon={<Icon type={icon} />} title={friend.name} />;
};
