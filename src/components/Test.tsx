import * as React from "react";
import { AccountSwitcher } from "./AccountSwitcher";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { QuickMenu } from "./QuickMenu";
import { QuickMenuItem } from "./QuickMenu/Item";
import { TransactionList } from "./TransactionList";
import { accounts, mockTransactions } from "src/helpers/mock";
import { Transaction } from "src/models/Transaction";
import { TextField } from "./TextField";

export type TestProps = {
    //
};

export const Test: React.SFC<TestProps> = ({}) => {
    const initialIndex = 1;

    const initMockData = mockTransactions(50, new Date());

    const [lastDate, setLastDate] = React.useState(initMockData[initMockData.length - 1].date);
    const [isLoading, setIsLoading] = React.useState(false);
    const [newItems, setNewItems] = React.useState<Transaction[]>(initMockData);

    const getMore = () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            console.log("MOCKING TRANSACTIONS, lastDate = ", lastDate);
            const mockedItems = mockTransactions(50, lastDate);
            setLastDate(mockedItems[mockedItems.length - 1].date);
            setNewItems(mockedItems);
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
            <TextField placeholder="Enter name" icon="Search" />
            <div style={{ height: 50 }} />
            <TransactionList newItems={newItems} getMore={getMore} />
            <div style={{ height: 50 }} />
            <MobileMenuContainer />
        </>
    );
};
