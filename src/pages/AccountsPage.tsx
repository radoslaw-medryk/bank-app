import * as React from "react";
import { Page } from "./Page";
import { QuickMenu } from "src/components/QuickMenu";
import { QuickMenuItem } from "src/components/QuickMenu/Item";
import { AccountSwitcher } from "src/components/AccountSwitcher";
import { Chart } from "src/components/Chart";
import { accounts, mockChart, mockTransactions } from "src/helpers/mock";
import { TransactionList } from "src/components/TransactionList";
import { Transaction } from "src/models/Transaction";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { mobileMenuHeight } from "src/components/MobileMenu";

const initialIndex = 1;

export type AccountsPageProps = {
    //
};

export const AccountsPage: React.SFC<AccountsPageProps> = ({}) => {
    // TODO [RM]: this logic doesn't belong here, move into its own component:
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

    const [transactionListHeight, setTransactionListHeight] = React.useState(100);

    const refCallback = React.useCallback((element: HTMLDivElement | null) => {
        if (!element) {
            return;
        }

        setTransactionListHeight(window.innerHeight - element.offsetTop - mobileMenuHeight);
    }, []);

    return (
        <Page>
            <QuickMenu>
                <QuickMenuItem icon={"Accounts"} href="#" />
                <QuickMenuItem icon={"Exchange"} href="#" />
                <QuickMenuItem icon={"Add"} href="#" />
            </QuickMenu>
            <AccountSwitcher accounts={accounts} initialIndex={initialIndex} />
            <Chart data={mockChart()} />
            <div ref={refCallback} />
            <TransactionList height={transactionListHeight} newItems={newItems} getMore={getMore} />
            <MobileMenuContainer />
        </Page>
    );
};
