import * as React from "react";
import { Currency } from "src/models/Currency";
import { styled } from "linaria/react";

const AccountSwitcherDetailsBox = styled.div`
    font-size: 12px;
    color: var(--gray4);
`;

export type AccountSwitcherDetailsProps = {
    currency: Currency;
};

export const AccountSwitcherDetails: React.SFC<AccountSwitcherDetailsProps> = ({ currency }) => {
    const { code, name } = currency;
    return (
        <AccountSwitcherDetailsBox>
            {code.toUpperCase()} • {name}
        </AccountSwitcherDetailsBox>
    );
};
