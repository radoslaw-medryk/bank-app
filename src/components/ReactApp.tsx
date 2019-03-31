import * as React from "react";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";

export type ReactAppProps = {
    //
};

export const ReactApp: React.SFC<ReactAppProps> = () => (
    <>
        <div style={{ height: 200 }} />
        <MobileMenuContainer />
    </>
);
