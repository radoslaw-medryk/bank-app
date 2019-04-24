import { ApiMoney } from "@radoslaw-medryk/bank-core-shared";
import { Money } from "src/models/Money";
import { mapApiCurrency } from "./mapCurrency";
import { mapBig } from "./mapBig";

export const mapMoney = (apiMoney: ApiMoney): Money => ({
    currency: mapApiCurrency(apiMoney.currencyCode),
    value: mapBig(apiMoney.value),
});
