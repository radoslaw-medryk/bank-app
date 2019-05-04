import * as React from "react";
import { QuickMenu } from "../QuickMenu";
import { styled } from "linaria/react";
import { Section } from "../Section";
import { MoneyField } from "../MoneyField";
import { FriendOption } from "../FriendOption";
import { Button } from "../Button";
import { Currency } from "src/models/Currency";
import { ApiFriend } from "@radoslaw-medryk/bank-core-shared";

const TextBlock = styled.p`
    margin: 0 15px;
    font-size: 14px;
    font-weight: 600;
`;

const SectionWithMargins = styled(Section)`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export type TransferToFriendProps = {
    friend: ApiFriend | undefined;
    currencies: Currency[];
    selectedCurrency: Currency | undefined;
    setSelectedCurrency: (currency: Currency) => void;
    onClose?: () => void;
};

export const TransferToFriend: React.SFC<TransferToFriendProps> = ({
    friend,
    currencies,
    selectedCurrency,
    setSelectedCurrency,
    onClose,
}) => {
    return (
        <>
            <TextBlock>Send transfer:</TextBlock>
            <SectionWithMargins>
                <MoneyField
                    currencies={currencies}
                    selectedCurrency={selectedCurrency}
                    onCurrencyChanged={setSelectedCurrency}
                />
            </SectionWithMargins>
            <TextBlock>To:</TextBlock>
            <SectionWithMargins>{friend ? <FriendOption friend={friend} /> : "Loading..."}</SectionWithMargins>
            <TextBlock>Available balance: xxx</TextBlock>
            <TextBlock>After operation: xxx</TextBlock>
            <SectionWithMargins>
                <Button>Transfer</Button>
            </SectionWithMargins>
        </>
    );
};
