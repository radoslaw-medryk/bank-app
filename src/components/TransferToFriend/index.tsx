import * as React from "react";
import { styled } from "linaria/react";
import { Section } from "../Section";
import { MoneyField } from "../MoneyField";
import { FriendOption } from "../FriendOption";
import { Button } from "../Button";
import { ApiFriend } from "@radoslaw-medryk/bank-core-shared";
import { Account } from "src/models/Account";
import { Currency } from "src/models/Currency";
import { standardFormatMoney } from "src/helpers/standardFormatMoney";
import Big from "big.js";
import { HiddenSubmit } from "../HiddenSubmit";

type TextBlockProps = JSX.IntrinsicElements["p"] & {
    isRed?: boolean;
};

const TextBlock = styled.p<TextBlockProps>`
    display: flex;
    margin: 0 15px;
    font-size: 14px;
    font-weight: 600;

    color: ${props => (props.isRed ? "var(--red)" : "inherit")};
`;

const SectionWithMargins = styled(Section)`
    margin-top: 20px;
    margin-bottom: 20px;
`;

const TextOnRight = styled.span`
    margin: 0 0 0 auto;
`;

export type TransferToFriendProps = {
    isInProgress: boolean;
    friend: ApiFriend | undefined;
    accounts: Account[];
    selectedAccount: Account | undefined;
    setSelectedAccount: (account: Account) => void;
    value: Big | undefined;
    valueError?: string | undefined;
    setValue?: (value: Big | undefined) => void;
    onSubmit?: () => void;
};

export const TransferToFriend: React.SFC<TransferToFriendProps> = ({
    isInProgress,
    friend,
    accounts,
    selectedAccount,
    setSelectedAccount,
    value,
    valueError,
    setValue,
    onSubmit,
}) => {
    if (accounts.length === 0 || !selectedAccount) {
        return <div>There are no accounts available.</div>; // TODO [RM]: make nicer
    }

    const currencies = accounts.map(q => q.balance.currency);
    const selectedCurrency = selectedAccount && selectedAccount.balance.currency;
    const onCurrencyChanged = (currency: Currency) => {
        const account = accounts.find(q => q.balance.currency === currency);
        account && setSelectedAccount(account);
    };

    const currencyCode = selectedAccount.balance.currency.code.toUpperCase();

    const availableBalance = selectedAccount.balance.value;
    const availableValueFormatted = standardFormatMoney(availableBalance);
    const availableBalanceFormatted = `${availableValueFormatted} ${currencyCode}`;

    let afterBalanceFormatted = "-";
    let afterBalanceRed = false;
    if (value !== undefined) {
        const afterBalance = availableBalance.sub(value);
        afterBalanceRed = afterBalance.lt(0);
        const afterValueFormatted = standardFormatMoney(afterBalance);
        afterBalanceFormatted = `${afterValueFormatted} ${currencyCode}`;
    }

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <HiddenSubmit />
            <TextBlock>Send transfer:</TextBlock>
            <SectionWithMargins>
                <MoneyField
                    currencies={currencies}
                    selectedCurrency={selectedCurrency}
                    onCurrencyChanged={onCurrencyChanged}
                    value={value}
                    onValueChanged={setValue}
                    mode={valueError ? "error" : "default"}
                    hint={valueError}
                />
            </SectionWithMargins>
            <TextBlock>To:</TextBlock>
            <SectionWithMargins>{friend ? <FriendOption friend={friend} /> : "Loading..."}</SectionWithMargins>
            <TextBlock>
                Available balance: <TextOnRight>{availableBalanceFormatted}</TextOnRight>
            </TextBlock>
            <TextBlock isRed={afterBalanceRed}>
                After operation: <TextOnRight>{afterBalanceFormatted}</TextOnRight>
            </TextBlock>
            <SectionWithMargins>
                <Button onClick={onSubmit} isLoading={isInProgress}>
                    Transfer
                </Button>
            </SectionWithMargins>
        </form>
    );
};
