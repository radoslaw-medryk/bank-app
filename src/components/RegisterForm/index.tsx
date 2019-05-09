import * as React from "react";
import { LoginRegisterForm } from "../LoginRegisterSection";
import { Icon } from "../Icon";
import { TextField } from "../TextField";
import { LoginRegisterSectionSwitch } from "../LoginRegisterSection/Switch";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { RegisterFieldKey } from "src/state/ui/state";
import { HorizontalCentered } from "../HorizontalCentered";
import { HiddenSubmit } from "../HiddenSubmit";

export type RegisterFormProps = {
    onFieldChanged: (field: RegisterFieldKey, value: string) => void;
    emailValue: string;
    emailError: string | undefined;

    passwordValue: string;
    passwordError: string | undefined;

    confirmPasswordValue: string;
    confirmPasswordError: string | undefined;

    isLoading: boolean;
    onSubmit: () => void;
};

export const RegisterForm: React.SFC<RegisterFormProps> = ({
    onFieldChanged,
    emailValue,
    emailError,
    passwordValue,
    passwordError,
    confirmPasswordValue,
    confirmPasswordError,
    isLoading,
    onSubmit,
}) => {
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <LoginRegisterForm onSubmit={onFormSubmit}>
            <HiddenSubmit />
            <HorizontalCentered>
                <Icon type="Logo" className="logo" />
            </HorizontalCentered>
            <TextField
                type="email"
                icon="Login"
                className="field first"
                placeholder="Email"
                onChange={q => onFieldChanged("email", q)}
                value={emailValue}
                mode={emailError ? "error" : "default"}
                hint={emailError}
            />
            <TextField
                type="password"
                icon="Password"
                className="field"
                placeholder="New password"
                onChange={q => onFieldChanged("password", q)}
                value={passwordValue}
                mode={passwordError ? "error" : "default"}
                hint={passwordError}
            />
            <TextField
                type="password"
                icon="Password"
                className="field"
                placeholder="Confirm password"
                onChange={q => onFieldChanged("confirmPassword", q)}
                value={confirmPasswordValue}
                mode={confirmPasswordError ? "error" : "default"}
                hint={confirmPasswordError}
            />
            <div className="spacer" />
            <LoginRegisterSectionSwitch>
                Already got an account? <Link to="/login">Log in instead</Link>
            </LoginRegisterSectionSwitch>
            <Button className="button" onClick={onSubmit} isLoading={isLoading}>
                Create account
            </Button>
        </LoginRegisterForm>
    );
};
