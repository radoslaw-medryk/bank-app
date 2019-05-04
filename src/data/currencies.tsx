import { Currency } from "src/models/Currency";

export const usd: Currency = {
    code: "usd",
    icon: "USD",
    name: "US Dollar",
    symbol: "$",
    symbolLocation: "left",
};
export const pln: Currency = {
    code: "pln",
    icon: "PLN",
    name: "Polish złoty",
    symbol: "zł",
    symbolLocation: "right",
};
export const cny: Currency = {
    code: "cny",
    icon: "CNY",
    name: "Chinese Yuan",
    symbol: "¥",
    symbolLocation: "left",
};

export const currencies = [usd, pln, cny];
