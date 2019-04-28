import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { RegisterForm, RegisterFormField, RegisterFormProps } from "src/components/RegisterForm";
import { authRegisterThunk } from "src/state/auth/thunks/authRegisterThunk";

const emailField: RegisterFormField = "RegisterForm-email";
const passwordField: RegisterFormField = "RegisterForm-password";
const confirmPasswordField: RegisterFormField = "RegisterForm-confirmPassword";

const mapStateToProps = (state: AppState) => {
    return {
        emailValue: state.ui.fields[emailField] || "",
        passwordValue: state.ui.fields[passwordField] || "",
        confirmPasswordValue: state.ui.fields[confirmPasswordField] || "",
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onFieldChanged: (field: RegisterFormField, value: string) => {
            dispatch(uiSetField(field, value));
        },

        onSubmit: (email: string, password: string, confirmPassword: string) => {
            if (password !== confirmPassword) {
                // TODO [RM]: show validation error.
                return;
            }

            dispatch(authRegisterThunk(email, password));
        },
    };
};

type PropsFromState = ReturnType<typeof mapStateToProps>;
type PropsFromDispatch = ReturnType<typeof mapDispatchToProps>;

const mergeProps = (stateProps: PropsFromState, dispatchProps: PropsFromDispatch): RegisterFormProps => {
    const onSubmit = () =>
        dispatchProps.onSubmit(stateProps.emailValue, stateProps.passwordValue, stateProps.confirmPasswordValue);

    return {
        ...stateProps,
        ...dispatchProps,
        onSubmit: onSubmit,
    };
};

export const RegisterFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(RegisterForm);
