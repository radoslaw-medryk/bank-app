import { IconType } from "src/components/Icon/Type";
import { CurrencyCode } from "./CurrencyCode";

export type Currency = {
    code: CurrencyCode;
    icon: IconType;
    name: string;
    symbol: string;
    symbolLocation: "left" | "right";
};
