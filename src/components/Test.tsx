import * as React from "react";
import { AccountSwitcher } from "./AccountSwitcher";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { QuickMenu } from "./QuickMenu";
import { QuickMenuItem } from "./QuickMenu/Item";
import { TransactionList } from "./TransactionList";
import { accounts, mockTransactions } from "src/helpers/mock";
import { Transaction } from "src/models/Transaction";

export type TestProps = {
    //
};

export const Test: React.SFC<TestProps> = ({}) => {
    const initialIndex = 1;

    const [isLoading, setIsLoading] = React.useState(false);
    const [transactions, setTransactions] = React.useState<Transaction[]>(mockTransactions(15));

    const onNextRequested = () => {
        setIsLoading(true);
        setTimeout(() => {
            const newTransactions = [...transactions, ...mockTransactions(10)];
            setTransactions(newTransactions);
            setIsLoading(false);
        }, 500);
    };
    //

    return (
        <>
            <QuickMenu>
                <QuickMenuItem icon={"Accounts"} href="#" />
                <QuickMenuItem icon={"Exchange"} href="#" />
                <QuickMenuItem icon={"Add"} href="#" />
            </QuickMenu>
            <AccountSwitcher accounts={accounts} initialIndex={initialIndex} />
            <div style={{ height: 50 }} />
            <TransactionList items={transactions} isLoading={isLoading} onNextBatchRequested={onNextRequested} />
            <div style={{ height: 50 }} />
            <MobileMenuContainer />
        </>
    );
};
