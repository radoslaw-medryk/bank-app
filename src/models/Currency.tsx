import { IconType } from "src/components/Icon/Type";

export type Currency = {
    code: string;
    icon: IconType;
    name: string;
    symbol: string;
    symbolLocation: "left" | "right";
};
