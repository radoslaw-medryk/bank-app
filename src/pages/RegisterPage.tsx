import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { AuthRedirect } from "src/containers/AuthRedirect";

export const RegisterPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <AuthRedirect to="/" when="logged-in" />
            xxx
            {/* <RegisterForm /> */}
        </PageBox>
    );
};
