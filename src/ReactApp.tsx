import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { AccountsPage } from "./pages/AccountsPage";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { TransferPage } from "./pages/TransferPage";
import { MorePage } from "./pages/MorePage";
import { MissingPage } from "./pages/MissingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TokenPersistContainer } from "./containers/TokenPersistContainer";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = () => (
    <BrowserRouter>
        <Provider store={store}>
            <TokenPersistContainer />
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/accounts" />} />
                <Route path="/accounts" component={AccountsPage} />
                <Route path="/transfer" component={TransferPage} />
                <Route path="/cards" component={MissingPage} />
                <Route path="/more" component={MorePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/missing" component={MissingPage} />
                <Route path="/" render={() => <Redirect to="/missing" />} />
            </Switch>
        </Provider>
    </BrowserRouter>
);
