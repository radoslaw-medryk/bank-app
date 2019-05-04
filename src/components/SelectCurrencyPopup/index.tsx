import * as React from "react";
import { Currency } from "src/models/Currency";
import { styled } from "linaria/react";
import { QuickMenu } from "../QuickMenu";
import { TextField } from "../TextField";
import { Section } from "../Section";
import { OptionsList } from "../OptionsList";
import { CurrencyOption } from "../CurrencyOption";

// TODO [RM]: make scrollable

const SelectCurrencyPopupBox = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
`;

export type SelectCurrencyPopupProps = {
    currencies: Currency[];
    onSelected?: (currency: Currency) => void;
    onCancel?: () => void;
};

export const SelectCurrencyPopup: React.SFC<SelectCurrencyPopupProps> = ({ currencies, onSelected, onCancel }) => {
    const onOptionClick = (currency: Currency) => () => {
        onSelected && onSelected(currency);
    };

    return (
        <SelectCurrencyPopupBox>
            <QuickMenu showClose={true} onClose={onCancel} />
            <Section>
                <TextField placeholder="Search" icon="Search" />
                <OptionsList>
                    {currencies.map(q => (
                        <a key={q.code} onClick={onOptionClick(q)}>
                            <CurrencyOption currency={q} />
                        </a>
                    ))}
                </OptionsList>
            </Section>
        </SelectCurrencyPopupBox>
    );
};
