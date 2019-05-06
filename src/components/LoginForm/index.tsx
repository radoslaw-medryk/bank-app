import * as React from "react";
import { LoginRegisterSection } from "../LoginRegisterSection";
import { Icon } from "../Icon";
import { TextField } from "../TextField";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { LoginRegisterSectionSwitch } from "../LoginRegisterSection/Switch";
import { LoginFieldKey } from "src/state/ui/state";
import { HorizontalCentered } from "../HorizontalCentered";

export type LoginFormProps = {
    onFieldChanged: (field: LoginFieldKey, value: string) => void;
    emailValue: string;
    emailError: string | undefined;

    passwordValue: string;
    passwordError: string | undefined;

    isLoading: boolean;
    onSubmit: () => void;
};

export const LoginForm: React.SFC<LoginFormProps> = ({
    onFieldChanged,
    emailValue,
    emailError,
    passwordValue,
    passwordError,
    isLoading,
    onSubmit,
}) => {
    return (
        <LoginRegisterSection>
            <HorizontalCentered>
                <Icon type="Logo" className="logo" />
            </HorizontalCentered>
            <TextField
                icon="Login"
                className="field first"
                placeholder="Email"
                onChange={q => onFieldChanged("email", q)}
                value={emailValue}
                mode={emailError ? "error" : "default"}
                hint={emailError}
            />
            <TextField
                icon="Password"
                className="field"
                placeholder="Password"
                onChange={q => onFieldChanged("password", q)}
                value={passwordValue}
                mode={passwordError ? "error" : "default"}
                hint={passwordError}
            />
            <div className="spacer" />
            <LoginRegisterSectionSwitch>
                Don’t have an account? <Link to="/register">Create one here</Link>
            </LoginRegisterSectionSwitch>
            <Button className="button" onClick={onSubmit} isLoading={isLoading}>
                Log in
            </Button>
        </LoginRegisterSection>
    );
};
