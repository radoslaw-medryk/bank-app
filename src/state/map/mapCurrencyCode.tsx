import { CurrencyCode, currencyCodes } from "src/models/CurrencyCode";

export const mapCurrencyCode = (apiCurrencyCode: string): CurrencyCode => {
    if (!currencyCodes.includes(apiCurrencyCode)) {
        throw new Error(`Unsupported apiCurrencyCode = '${apiCurrencyCode}'.`);
    }

    return apiCurrencyCode as CurrencyCode;
};
