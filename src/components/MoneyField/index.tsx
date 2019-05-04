import * as React from "react";
import { styled } from "linaria/react";
import { MoneyFieldInput } from "./internal/Input";
import { Currency } from "src/models/Currency";
import { MoneyFieldCurrencySelect } from "./internal/CurrencySelect";
import { SelectCurrencyPopup } from "../SelectCurrencyPopup";

const MoneyFieldBox = styled.div`
    height: 50px;
    /* border-bottom: 1px solid var(--gray2); */

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export type MoneyFieldProps = {
    currencies: Currency[];
    selectedCurrency: Currency | undefined;
    onCurrencyChanged?: (currency: Currency) => void;
};

export const MoneyField: React.SFC<MoneyFieldProps> = ({ currencies, selectedCurrency, onCurrencyChanged }) => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    const onSelectClick = () => {
        setIsPopupOpen(true);
    };

    const onSelected = (currency: Currency) => {
        onCurrencyChanged && onCurrencyChanged(currency);
        setIsPopupOpen(false);
    };

    const onCancel = () => {
        setIsPopupOpen(false);
    };

    return (
        <MoneyFieldBox>
            {isPopupOpen ? (
                <SelectCurrencyPopup currencies={currencies} onSelected={onSelected} onCancel={onCancel} />
            ) : (
                undefined
            )}
            <MoneyFieldCurrencySelect currency={selectedCurrency} onClick={onSelectClick} />
            <MoneyFieldInput type="number" placeholder="0.00" min={0} step="0.01" />
        </MoneyFieldBox>
    );
};
