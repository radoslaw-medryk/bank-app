import * as React from "react";
import { LoginRegisterSection } from "../LoginRegisterSection";
import { Icon } from "../Icon";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { LoginRegisterSectionSwitch } from "../LoginRegisterSection/Switch";

export type LoginFormField = "LoginForm-email" | "LoginForm-password";

export type LoginFormProps = {
    onFieldChanged: (field: LoginFormField, value: string) => void;
    emailValue: string;
    passwordValue: string;

    onSubmit: () => void;
};

export const LoginForm: React.SFC<LoginFormProps> = ({ onFieldChanged, emailValue, passwordValue, onSubmit }) => {
    return (
        <LoginRegisterSection>
            <Icon type="Logo" className="logo" />
            <TextField
                icon="Login"
                className="field first"
                placeholder="Email"
                onChange={q => onFieldChanged("LoginForm-email", q)}
                value={emailValue}
            />
            <TextField
                icon="Password"
                className="field"
                placeholder="Password"
                onChange={q => onFieldChanged("LoginForm-password", q)}
                value={passwordValue}
            />
            <div className="spacer" />
            <LoginRegisterSectionSwitch>
                Don’t have an account? <Link to="/register">Create one here</Link>
            </LoginRegisterSectionSwitch>
            <Button className="button" onClick={onSubmit}>
                Log in
            </Button>
        </LoginRegisterSection>
    );
};
