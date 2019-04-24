import * as React from "react";
import { PageBox } from "./PageBox";
import { QuickMenu } from "src/components/QuickMenu";
import { QuickMenuItem } from "src/components/QuickMenu/Item";
import { AccountSwitcher } from "src/components/AccountSwitcher";
import { Chart } from "src/components/Chart";
import { accounts, mockChart } from "src/helpers/mock";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { mobileMenuHeight } from "src/components/MobileMenu";
import { TransactionListContainer } from "src/containers/TransactionListContainer";
import { PageProps } from "./PageProps";
import { AuthRedirect } from "src/containers/AuthRedirect";

const initialIndex = 1;

export const AccountsPage: React.SFC<PageProps> = ({ match }) => {
    const [transactionListHeight, setTransactionListHeight] = React.useState(100);

    const refCallback = React.useCallback((element: HTMLDivElement | null) => {
        if (!element) {
            return;
        }
        setTransactionListHeight(window.innerHeight - element.offsetTop - mobileMenuHeight);
    }, []);

    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <QuickMenu>
                <QuickMenuItem icon={"Accounts"} to={`${match.url}/currencies`} />
                <QuickMenuItem icon={"Exchange"} to={`${match.url}/exchange`} />
                <QuickMenuItem icon={"Add"} to={`${match.url}/add`} />
            </QuickMenu>
            <AccountSwitcher accounts={accounts} initialIndex={initialIndex} />
            <Chart data={mockChart()} />
            <div ref={refCallback} />
            <TransactionListContainer height={transactionListHeight} />
            <MobileMenuContainer />
        </PageBox>
    );
};
