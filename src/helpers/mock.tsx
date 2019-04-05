import { Transaction } from "src/models/Transaction";
import { Currency } from "src/models/Currency";
import { Money } from "src/models/Money";
import { Big } from "big.js";
import { TransactionCategory } from "src/models/TransactionCategory";

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

const mockCategory = () => {
    const categories: TransactionCategory[] = ["food", "groceries", "transport"];
    return categories[Math.floor(Math.random() * categories.length)];
};

const mockTitle = () => {
    const titles = [
        "Tornado Lake",
        "Maximum Light",
        "Fakta",
        "Bar Barnabus",
        "Totally Awesome Shop Selling Bread",
        "DSB",
        "See Sea",
        "Tea and Coffee",
        "Baroleno Vis",
        "Magic Excalibur",
    ];
    return titles[Math.floor(Math.random() * titles.length)];
};

const mockTransaction = (date: Date): Transaction => {
    const id = Math.round(Math.random() * 1000000);

    return {
        id: id,
        date: date,
        category: mockCategory(),
        title: mockTitle(),
        value: {
            value: new Big(Math.random() * 20000 - 10000).round(2),
            currency: cny,
        },
    };
};

export const mockTransactions = (count: number, maxDate: Date) => {
    let result: Transaction[] = [];

    let lastDate = new Date(maxDate);
    for (let i = 0; i < count; i++) {
        const date = new Date(lastDate.getTime());
        const subMinutes = Math.round(Math.random() * 600);
        date.setMinutes(date.getMinutes() - subMinutes);
        lastDate = new Date(date);

        result = [...result, mockTransaction(date)];
    }

    return result;
};
