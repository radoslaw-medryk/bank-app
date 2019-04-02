import Big from "big.js";

export type FormatMoneyResult = {
    units: string;
    cents: string;
    isNegative: boolean;
};

export const formatMoney = (value: Big): FormatMoneyResult => {
    const isNegative = value.lt(0);
    const units = value.abs().round(0, 0 /* RoundingMode.RoundDown */);
    const cents = value
        .abs()
        .mod(1)
        .mul(100);

    return {
        units: integerToString(units, 1, 3),
        cents: integerToString(cents, 2),
        isNegative: isNegative,
    };
};

const integerToString = (value: Big, minDigits: number, groupThousandsSectionSize?: number) => {
    let baseString = value.toFixed(0);
    if (baseString.length < minDigits) {
        baseString = padZeros(baseString, minDigits);
    }

    if (groupThousandsSectionSize && groupThousandsSectionSize > 0) {
        baseString = groupThousands(baseString, groupThousandsSectionSize);
    }

    return baseString;
};

const padZeros = (value: string, minDigits: number) => {
    return value.length < minDigits ? new Array(minDigits - value.length).fill(0).join("") + value : value;
};

const splitString = (value: string, chunkSize: number) => {
    let result: string[] = [];
    for (let i = value.length; i > 0; i = i - chunkSize) {
        const start = i < chunkSize ? 0 : i - chunkSize;
        const end = i;
        result = [value.substring(start, end), ...result];
    }
    return result;
};

const groupThousands = (value: string, groupThousandsSectionSize: number) => {
    return splitString(value, groupThousandsSectionSize).join(",");
};
