import { TransactionCategory } from "./TransactionCategory";
import { Money } from "./Money";

export type Transaction = {
    id: number;
    date: Date;
    category: TransactionCategory;
    title: string;
    value: Money;
};
