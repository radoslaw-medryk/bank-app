import Big from "big.js";

export const mapBig = (apiBig: string): Big => {
    return new Big(apiBig); // TODO [RM]: validate? throw if error?
};
