import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Test } from "./components/Test";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = () => (
    <Provider store={store}>
        {/* <AccountsPage /> */}
        <Test />
    </Provider>
);
