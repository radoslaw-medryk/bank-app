import { Transaction } from "src/models/Transaction";
import { Currency } from "src/models/Currency";
import { Money } from "src/models/Money";
import { Big } from "big.js";

export const usd: Currency = {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    symbolLocation: "left",
};
export const pln: Currency = {
    code: "PLN",
    name: "Polish złoty",
    symbol: "zł",
    symbolLocation: "right",
};
export const cny: Currency = {
    code: "CNY",
    name: "Chinese Yuan",
    symbol: "¥",
    symbolLocation: "left",
};

export const accounts: Money[] = [
    {
        value: new Big("12439.58"),
        currency: usd,
    },
    {
        value: new Big("1002345.0"),
        currency: pln,
    },
    {
        value: new Big("888888.88"),
        currency: cny,
    },
];

const mockTransaction = (): Transaction => {
    const id = Math.round(Math.random() * 10000);

    return {
        id: id,
        date: new Date(),
        category: "food",
        title: `Transaction #${id}`,
        value: {
            value: new Big(Math.random() * 10000).round(2),
            currency: cny,
        },
    };
};

export const mockTransactions = (count: number) => {
    return new Array(count).fill(0).map(q => mockTransaction());
};
