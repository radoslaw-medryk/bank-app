import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { MobileMenuContainer } from "src/containers/MobileMenuContainer";
import { AuthRedirect } from "src/containers/AuthRedirect";
import { MyProfileContainer } from "src/containers/MyProfileContainer";

export const MorePage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <AuthRedirect to="/login" when="not-logged-in" />
            <MyProfileContainer />
            <MobileMenuContainer />
        </PageBox>
    );
};
