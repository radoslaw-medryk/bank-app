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

const mockTransaction = (date: Date): Transaction => {
    const id = Math.round(Math.random() * 10000);

    return {
        id: id,
        date: date,
        category: "food",
        title: `Transaction #${id}`,
        value: {
            value: new Big(Math.random() * 10000).round(2),
            currency: cny,
        },
    };
};

export const mockTransactions = (count: number, minDate: Date) => {
    let result: Transaction[] = [];

    let lastDate = new Date(minDate);
    for (let i = 0; i < count; i++) {
        const date = new Date(lastDate.getTime());
        const addMinutes = Math.round(Math.random() * 600);
        date.setMinutes(date.getMinutes() + addMinutes);
        lastDate = new Date(date);

        result = [...result, mockTransaction(date)];
    }

    return result;
};
