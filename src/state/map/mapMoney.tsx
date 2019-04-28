import { ApiMoney } from "@radoslaw-medryk/bank-core-shared";
import { Money } from "src/models/Money";
import { mapCurrency } from "./mapCurrency";
import { mapBig } from "./mapBig";

export const mapMoney = (apiMoney: ApiMoney): Money => ({
    currency: mapCurrency(apiMoney.currencyCode),
    value: mapBig(apiMoney.value),
});
