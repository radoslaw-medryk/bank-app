import * as React from "react";
import { styled } from "linaria/react";
import { MoneyFieldInput } from "./internal/Input";
import { Currency } from "src/models/Currency";
import { MoneyFieldCurrencySelect } from "./internal/CurrencySelect";

const MoneyFieldBox = styled.div`
    height: 60px;
    border-bottom: 1px solid var(--gray2);

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export type MoneyFieldProps = {
    currencies: Currency[];
    initialCurrency: Currency;
};

export const MoneyField: React.SFC<MoneyFieldProps> = ({ initialCurrency }) => {
    return (
        <MoneyFieldBox>
            <MoneyFieldCurrencySelect currency={initialCurrency} />
            <MoneyFieldInput type="number" placeholder="0.00" min={0} step="0.01" pattern="^\d*(\.\d{0,2})?$" />
        </MoneyFieldBox>
    );
};
