import * as React from "react";
import { Currency } from "src/models/Currency";
import { Option } from "../Option";

export type CurrencyDisplayProps = {
    currency: Currency;
    className?: string;
};

export const CurrencyDisplay: React.SFC<CurrencyDisplayProps> = ({ currency, className }) => {
    return <Option icon={currency.icon} title={currency.code} description={currency.name} className={className} />;
};
