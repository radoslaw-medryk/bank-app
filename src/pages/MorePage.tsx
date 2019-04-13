import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";

export const MorePage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <div>MorePage</div>
            <MobileMenuContainer />
        </PageBox>
    );
};
