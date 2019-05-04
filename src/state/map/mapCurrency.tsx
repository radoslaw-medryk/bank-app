import { ApiCurrencyCode } from "@radoslaw-medryk/bank-core-shared";
import { Currency } from "src/models/Currency";
import { currencies } from "src/data/currencies";

export const mapCurrency = (apiCurrency: ApiCurrencyCode): Currency => {
    const currency = currencies.find(q => q.code === apiCurrency);

    if (!currency) {
        throw new Error(`Cannot map currency; Unsupported code = '${apiCurrency}'.`);
    }

    return currency;
};
