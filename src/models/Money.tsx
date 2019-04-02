import Big from "big.js";
import { Currency } from "./Currency";

export type Money = {
    value: Big;
    currency: Currency;
};
