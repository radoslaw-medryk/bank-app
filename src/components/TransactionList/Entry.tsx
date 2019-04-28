import { Transaction } from "src/models/Transaction";

export type TransactionListTransactionEntry = {
    type: "transaction";
    transaction: Transaction;
};
export type TransactionListHeaderEntry = {
    type: "header";
    date: Date;
};

export type TransactionListEntry = TransactionListTransactionEntry | TransactionListHeaderEntry;
