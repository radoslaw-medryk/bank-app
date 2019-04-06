import * as React from "react";
import { styled } from "linaria/react";
import { CurrencyDisplayProps, CurrencyDisplay } from "src/components/CurrencyDisplay";
import { Icon } from "src/components/Icon";

const MoneyFieldCurrencySelectBox = styled.div`
    flex: 0 0 152px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    & > .currency {
        flex: 0 0 140px;
    }
`;

export type MoneyFieldCurrencySelectProps = CurrencyDisplayProps & {
    //
};

export const MoneyFieldCurrencySelect: React.SFC<MoneyFieldCurrencySelectProps> = ({ ...rest }) => {
    return (
        <MoneyFieldCurrencySelectBox>
            <CurrencyDisplay className="currency" {...rest} />
            <Icon type="ArrowDown" />
        </MoneyFieldCurrencySelectBox>
    );
};
