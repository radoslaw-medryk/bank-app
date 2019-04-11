import { ApiCurrencyCode } from "@radoslaw-medryk/bank-core-models";
import { Currency } from "src/models/Currency";
import { usd, pln, cny } from "src/helpers/mock";

// TODO [RM]: TEMP, test only. Should be improved.

export const mapApiCurrency = (apiCurrency: ApiCurrencyCode): Currency => {
    const currencies = [usd, pln, cny];
    const currency = currencies.find(q => q.code === apiCurrency);

    if (!currency) {
        throw new Error(`Cannot map currency; Unsupported code = '${apiCurrency}'.`);
    }

    return currency;
};
