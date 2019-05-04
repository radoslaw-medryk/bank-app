import * as React from "react";
import { styled } from "linaria/react";
import { CurrencyOptionProps, CurrencyOption } from "src/components/CurrencyOption";
import { Icon } from "src/components/Icon";

const MoneyFieldCurrencySelectBox = styled.div`
    flex: 0 0 152px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & > .currency {
        flex: 0 0 140px;
    }

    svg {
        fill: var(--gray3);
    }
`;

export type MoneyFieldCurrencySelectProps = PartialSelected<CurrencyOptionProps, "currency"> & {
    onClick?: () => void;
};

export const MoneyFieldCurrencySelect: React.SFC<MoneyFieldCurrencySelectProps> = ({ onClick, currency, ...rest }) => {
    // TODO [RM]: make better loading state

    return (
        <MoneyFieldCurrencySelectBox onClick={onClick}>
            {currency ? <CurrencyOption className="currency" currency={currency} {...rest} /> : "Loading..."}
            <Icon type="ArrowDown" />
        </MoneyFieldCurrencySelectBox>
    );
};
