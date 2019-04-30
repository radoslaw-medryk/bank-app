import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { AuthRedirect } from "src/containers/AuthRedirect";
import { RegisterFormContainer } from "src/containers/RegisterFormContainer";

export const RegisterPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <AuthRedirect to="/" when="logged-in" />
            <RegisterFormContainer />
        </PageBox>
    );
};
