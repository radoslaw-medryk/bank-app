import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";

export const TransferPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <div>TransferPage</div>
            <MobileMenuContainer />
        </PageBox>
    );
};
