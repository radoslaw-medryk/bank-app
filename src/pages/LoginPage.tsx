import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { LoginFormContainer } from "src/containers/LoginFormContainer";
import { AuthRedirect } from "src/containers/AuthRedirect";

export const LoginPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <AuthRedirect to="/" when="logged-in" />
            <LoginFormContainer />
        </PageBox>
    );
};
