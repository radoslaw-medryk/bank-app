import * as React from "react";
import { Page } from "./Page";
import { QuickMenu } from "src/components/QuickMenu";
import { QuickMenuItem } from "src/components/QuickMenu/Item";
import { AccountSwitcher } from "src/components/AccountSwitcher";
import { Chart } from "src/components/Chart";
import { accounts, mockChart } from "src/helpers/mock";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { mobileMenuHeight } from "src/components/MobileMenu";
import { TransactionListContainer } from "src/containers/TransactionListContainer";

const initialIndex = 1;

export type AccountsPageProps = {
    //
};

export const AccountsPage: React.SFC<AccountsPageProps> = ({}) => {
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
            <TransactionListContainer height={transactionListHeight} />
            <MobileMenuContainer />
        </Page>
    );
};
