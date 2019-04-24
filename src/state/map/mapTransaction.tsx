import { ApiTransaction } from "@radoslaw-medryk/bank-core-shared";
import { Transaction } from "src/models/Transaction";
import { mapMoney } from "./mapMoney";
import { mapDate } from "./mapDate";

export const mapTransaction = (apiTransaction: ApiTransaction): Transaction => ({
    id: apiTransaction.id,
    category: apiTransaction.category,
    date: mapDate(apiTransaction.date),
    title: apiTransaction.title,
    value: mapMoney(apiTransaction.value),
});
