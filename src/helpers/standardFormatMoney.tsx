import Big from "big.js";
import { formatMoney } from "./formatMoney";

export const standardFormatMoney = (value: Big): string => {
    const formated = formatMoney(value);
    return `${formated.isNegative ? "-" : ""}${formated.units}.${formated.cents}`;
};
