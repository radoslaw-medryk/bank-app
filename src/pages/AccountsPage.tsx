import * as React from "react";
import { PageBox } from "./PageBox";
import { QuickMenu } from "src/components/QuickMenu";
import { Chart } from "src/components/Chart";
import { mockChart } from "src/helpers/mock";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { mobileMenuHeight } from "src/components/MobileMenu";
import { TransactionListContainer } from "src/containers/TransactionListContainer";
import { PageProps } from "./PageProps";
import { AuthRedirect } from "src/containers/AuthRedirect";
import { AccountSwitcherContainer } from "src/containers/AccountSwitcherContainer";

export const AccountsPage: React.SFC<PageProps> = ({ match }) => {
    const [transactionListHeight, setTransactionListHeight] = React.useState(100);

    const refCallback = React.useCallback((element: HTMLDivElement | null) => {
        if (!element) {
            return;
        }
        const buffer = 5; // px
        setTransactionListHeight(window.innerHeight - element.offsetTop - mobileMenuHeight - buffer);
    }, []);

    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <QuickMenu>
                {/* <QuickMenuItem icon={"Accounts"} to={`${match.url}/currencies`} />
                <QuickMenuItem icon={"Exchange"} to={`${match.url}/exchange`} />
                <QuickMenuItem icon={"Add"} to={`${match.url}/add`} /> */}
            </QuickMenu>
            <AccountSwitcherContainer />
            <Chart data={mockChart()} />
            <div ref={refCallback} />
            <TransactionListContainer height={transactionListHeight} />
            <MobileMenuContainer />
        </PageBox>
    );
};
