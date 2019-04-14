import * as React from "react";
import { PageProps } from "./PageProps";
import { PageBox } from "./PageBox";
import { Icon } from "src/components/Icon";
import { TextField } from "src/components/TextField";
import { Button } from "src/components/Button";
import { Link } from "react-router-dom";
import { LoginRegisterSection, LoginRegisterSwitch } from "./LoginRegisterPageBase";

export const RegisterPage: React.SFC<PageProps> = ({}) => {
    return (
        <PageBox>
            <LoginRegisterSection>
                <Icon type="Logo" className="logo" />
                <TextField icon="Login" className="field first" placeholder="Email" />
                <TextField icon="Password" className="field" placeholder="New password" />
                <TextField icon="Password" className="field" placeholder="Confirm password" />
                <div className="spacer" />
                <LoginRegisterSwitch>
                    Already got an account? <Link to="/login">Log in instead</Link>
                </LoginRegisterSwitch>
                <Button className="button">Create account</Button>
            </LoginRegisterSection>
        </PageBox>
    );
};
