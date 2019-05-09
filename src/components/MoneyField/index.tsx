import * as React from "react";
import { styled } from "linaria/react";
import { MoneyFieldInput } from "./internal/Input";
import { Currency } from "src/models/Currency";
import { MoneyFieldCurrencySelect } from "./internal/CurrencySelect";
import { SelectCurrencyPopup } from "../SelectCurrencyPopup";
import Big from "big.js";
import { MoneyFieldMode } from "./Mode";
import { MoneyFieldWrapper } from "./internal/Wrapper";
import { MoneyFieldHint } from "./internal/Hint";

const parseBig = (value: string): Big | undefined => {
    try {
        return new Big(value);
    } catch {
        return undefined;
    }
};

const MoneyFieldBox = styled.div`
    /*height: 50px;*/
`;

export type MoneyFieldProps = {
    currencies: Currency[];
    selectedCurrency: Currency | undefined;
    onCurrencyChanged?: (currency: Currency) => void;

    value: Big | undefined;
    onValueChanged?: (value: Big | undefined) => void;

    hint?: string;
    mode?: MoneyFieldMode;
};

export const MoneyField: React.SFC<MoneyFieldProps> = ({
    currencies,
    selectedCurrency,
    onCurrencyChanged,
    value,
    onValueChanged,
    hint,
    mode,
}) => {
    mode = mode || "default";

    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [rawValueStr, setRawValueStr] = React.useState("");

    const rawValueBig = parseBig(rawValueStr);
    const valueStr = value ? value.toFixed(2) : "";

    React.useEffect(() => {
        console.log("Effect", value);
        if (!value || !rawValueBig) {
            if (value !== rawValueBig) {
                console.log("###1", value, rawValueBig);
                setRawValueStr(valueStr);
            }
        } else if (!value.eq(rawValueBig)) {
            console.log("###2");
            setRawValueStr(valueStr);
        }
    }, [value]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValueStr = e.currentTarget.value;
        setRawValueStr(newValueStr);

        const valueBig = parseBig(newValueStr);
        console.log("onValueChanged", valueBig);
        onValueChanged && onValueChanged(valueBig);
    };

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
            <MoneyFieldWrapper mode={mode}>
                <MoneyFieldCurrencySelect currency={selectedCurrency} onClick={onSelectClick} />
                <MoneyFieldInput
                    type="number"
                    placeholder="0.00"
                    min={0}
                    step="0.01"
                    value={rawValueStr}
                    onChange={onChange}
                />
            </MoneyFieldWrapper>
            <MoneyFieldHint mode={mode}>{hint}</MoneyFieldHint>
        </MoneyFieldBox>
    );
};
