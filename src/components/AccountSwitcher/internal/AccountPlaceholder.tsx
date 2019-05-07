import * as React from "react";
import { styled } from "linaria/react";
import { accountHeight } from "./Account";

const AccountSwitcherAccountPlaceholderBox = styled.div`
    height: ${accountHeight}px;
    color: var(--gray3);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export type AccountSwitcherAccountPlaceholderProps = {
    //
};

export const AccountSwitcherAccountPlaceholder: React.SFC<AccountSwitcherAccountPlaceholderProps> = ({}) => {
    return <AccountSwitcherAccountPlaceholderBox>No accounts found.</AccountSwitcherAccountPlaceholderBox>;
};
