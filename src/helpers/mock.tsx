import { Big } from "big.js";
import { getDate } from "./getDate";
import { TransactionsDay } from "src/models/TransactionsDay";
import { usd } from "src/data/currencies";

export const mockChart = (): TransactionsDay[] => {
    let result: TransactionsDay[] = [];
    let lastValue = new Big("12480.00");

    for (let i = 0; i < 30; i++) {
        const date = getDate(new Date());
        date.setDate(date.getDate() - i);
        lastValue = lastValue.add(new Big(Math.floor(Math.random() * 400000 - 200000) / 100));

        result = [...result, { date: date, value: { currency: usd, value: lastValue } }];
    }

    return result;
};
