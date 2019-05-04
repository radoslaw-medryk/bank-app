import * as React from "react";
import { Currency } from "src/models/Currency";
import { Option } from "../Option";

export type CurrencyOptionProps = {
    currency: Currency;
    className?: string;
};

export const CurrencyOption: React.SFC<CurrencyOptionProps> = ({ currency, className }) => {
    return (
        <Option
            icon={currency.icon}
            title={currency.code.toUpperCase()}
            description={currency.name}
            className={className}
        />
    );
};
