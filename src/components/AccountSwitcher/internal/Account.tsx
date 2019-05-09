import * as React from "react";
import { Money } from "src/models/Money";
import { AccountSwitcherBalance } from "./Balance";
import { AccountSwitcherDetails } from "./Details";
import { styled } from "linaria/react";

export const accountHeight = 45;

const AccountSwitcherAccountBox = styled.div`
    height: ${accountHeight}px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

export type AccountSwitcherAccountProps = {
    balance: Money;
};

export const AccountSwitcherAccount: React.SFC<AccountSwitcherAccountProps> = ({ balance }) => {
    return (
        <AccountSwitcherAccountBox>
            <AccountSwitcherBalance balance={balance} />
            <AccountSwitcherDetails currency={balance.currency} />
        </AccountSwitcherAccountBox>
    );
};
