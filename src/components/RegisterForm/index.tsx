import * as React from "react";
import { LoginRegisterSection } from "../LoginRegisterSection";
import { Icon } from "../Icon";
import { TextField } from "../TextField";
import { LoginRegisterSectionSwitch } from "../LoginRegisterSection/Switch";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export type RegisterFormField = "RegisterForm-email" | "RegisterForm-password" | "RegisterForm-confirmPassword";

export type RegisterFormProps = {
    onFieldChanged: (field: RegisterFormField, value: string) => void;
    emailValue: string;
    passwordValue: string;
    confirmPasswordValue: string;

    onSubmit: () => void;
};

export const RegisterForm: React.SFC<RegisterFormProps> = ({
    onFieldChanged,
    emailValue,
    passwordValue,
    confirmPasswordValue,
    onSubmit,
}) => {
    return (
        <LoginRegisterSection>
            <Icon type="Logo" className="logo" />
            <TextField
                icon="Login"
                className="field first"
                placeholder="Email"
                onChange={q => onFieldChanged("RegisterForm-email", q)}
                value={emailValue}
            />
            <TextField
                icon="Password"
                className="field"
                placeholder="New password"
                onChange={q => onFieldChanged("RegisterForm-password", q)}
                value={passwordValue}
            />
            <TextField
                icon="Password"
                className="field"
                placeholder="Confirm password"
                onChange={q => onFieldChanged("RegisterForm-confirmPassword", q)}
                value={confirmPasswordValue}
            />
            <div className="spacer" />
            <LoginRegisterSectionSwitch>
                Already got an account? <Link to="/login">Log in instead</Link>
            </LoginRegisterSectionSwitch>
            <Button className="button" onClick={onSubmit}>
                Create account
            </Button>
        </LoginRegisterSection>
    );
};
