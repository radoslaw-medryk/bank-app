import { ApiAccount } from "@radoslaw-medryk/bank-core-shared/dist/ApiAccount";
import { Account } from "src/models/Account";
import { mapBig } from "./mapBig";
import { mapCurrency } from "./mapCurrency";

export const mapAccount = (apiAccount: ApiAccount): Account => ({
    id: apiAccount.id,
    balance: {
        value: mapBig(apiAccount.balance),
        currency: mapCurrency(apiAccount.currency),
    },
});
