import { ApiTransaction } from "@radoslaw-medryk/bank-core-models";
import { Transaction } from "src/models/Transaction";
import { mapApiMoney } from "./mapApiMoney";
import { mapDate } from "./mapDate";

export const mapApiTransaction = (apiTransaction: ApiTransaction): Transaction => ({
    id: apiTransaction.id,
    category: apiTransaction.category,
    date: mapDate(apiTransaction.date),
    title: apiTransaction.title,
    value: mapApiMoney(apiTransaction.value),
});
