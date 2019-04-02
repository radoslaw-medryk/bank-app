import * as React from "react";
import { Money } from "src/models/Money";
import { AccountSwitcher } from "./AccountSwitcher";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { Big } from "big.js";

const accounts: Money[] = [
    {
        value: new Big("12439.58"),
        currency: {
            code: "USD",
            name: "US Dollar",
            symbol: "$",
            symbolLocation: "left",
        },
    },
    {
        value: new Big("1002345.0"),
        currency: {
            code: "PLN",
            name: "Polish złoty",
            symbol: "zł",
            symbolLocation: "right",
        },
    },
    {
        value: new Big("888888.88"),
        currency: {
            code: "CNY",
            name: "Chinese Yuan",
            symbol: "¥",
            symbolLocation: "left",
        },
    },
];

export type TestProps = {
    //
};

export const Test: React.SFC<TestProps> = ({}) => {
    const initialIndex = 1;
    const [index, setIndex] = React.useState(initialIndex);

    const onChange = (i: number) => setIndex(i);

    return (
        <>
            <div style={{ height: 200 }} />
            {index}
            <div style={{ height: 50 }} />
            <AccountSwitcher accounts={accounts} initialIndex={initialIndex} onSelectedAccountChanged={onChange} />
            <div style={{ height: 200 }} />
            <MobileMenuContainer />
        </>
    );
};
