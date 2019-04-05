import * as React from "react";
import { Money } from "src/models/Money";
import { formatMoney } from "src/helpers/formatMoney";
import { styled } from "linaria/react";

const AccountSwitcherBalanceBox = styled.div`
    font-size: 24px;
    font-weight: 600;

    .cents {
        font-size: 14px;
    }
`;

const AccountSwitcherCentsBox = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

export type AccountSwitcherBalanceProps = {
    balance: Money;
};

export const AccountSwitcherBalance: React.SFC<AccountSwitcherBalanceProps> = ({ balance }) => {
    const currency = balance.currency;
    const formattedValue = formatMoney(balance.value);

    const units = `${formattedValue.isNegative ? "-" : ""}${formattedValue.units}`;
    const cents = formattedValue.cents;

    const symbolLeft = currency.symbolLocation === "left" ? currency.symbol : "";
    const symbolRight = currency.symbolLocation === "right" ? currency.symbol : "";

    return (
        <AccountSwitcherBalanceBox>
            {symbolLeft} {units}
            <AccountSwitcherCentsBox>.{cents}</AccountSwitcherCentsBox> {symbolRight}
        </AccountSwitcherBalanceBox>
    );
};
