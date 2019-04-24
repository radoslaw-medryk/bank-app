import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { AuthRedirect } from "src/containers/AuthRedirect";

export const CardsPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <div>CardsPage</div>
            <MobileMenuContainer />
        </PageBox>
    );
};
