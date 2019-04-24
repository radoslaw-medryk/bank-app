import { connect } from "react-redux";
import { LoginForm, LoginFormField, LoginFormProps } from "src/components/LoginForm";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { authLoginThunk } from "src/state/auth/thunks/authLoginThunk";

const emailField: LoginFormField = "LoginForm-email";
const passwordField: LoginFormField = "LoginForm-password";

const mapStateToProps = (state: AppState) => {
    return {
        emailValue: state.ui.fields[emailField] || "",
        passwordValue: state.ui.fields[passwordField] || "",
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onFieldChanged: (field: LoginFormField, value: string) => {
            dispatch(uiSetField(field, value));
        },

        onSubmit: (email: string, password: string) => {
            dispatch(authLoginThunk(email, password));
        },
    };
};

type PropsFromState = ReturnType<typeof mapStateToProps>;
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: PropsFromState, dispatchProps: PropsFromDispatch): LoginFormProps => {
    const onSubmit = () => dispatchProps.onSubmit(stateProps.emailValue, stateProps.passwordValue);

    return {
        ...stateProps,
        ...dispatchProps,
        onSubmit: onSubmit,
    };
};

export const LoginFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(LoginForm);
