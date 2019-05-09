import { connect } from "react-redux";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { RegisterForm, RegisterFormProps } from "src/components/RegisterForm";
import { authRegisterThunk } from "src/state/auth/thunks/authRegisterThunk";
import { uiSetErrors } from "src/state/ui/actions/UiSetErrors";
import { AreaKey, RegisterFieldKey } from "src/state/ui/state";
import { Validation } from "rusane";
import { isFetchLoading } from "src/state/helpers/isFetchLoading";

const registerArea: AreaKey = "register";

const emailField: RegisterFieldKey = "email";
const passwordField: RegisterFieldKey = "password";
const confirmPasswordField: RegisterFieldKey = "confirmPassword";

const mapStateToProps = (state: AppState) => {
    const fields = state.ui.fields[registerArea] || {};
    const errors = state.ui.errors[registerArea] || {};

    return {
        emailValue: fields[emailField] || "",
        emailError: errors[emailField],

        passwordValue: fields[passwordField] || "",
        passwordError: errors[passwordField],

        confirmPasswordValue: fields[confirmPasswordField] || "",
        confirmPasswordError: errors[confirmPasswordField],

        isLoading: isFetchLoading(state.auth.registerFetch),
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onFieldChanged: (field: RegisterFieldKey, value: string) => {
            dispatch(uiSetField(registerArea, field, value));
            dispatch(uiSetErrors(registerArea, [field], undefined));
        },

        onSubmit: (email: string, password: string, confirmPassword: string) => {
            if (email.length < 5 || Validation.validateEmail(email).error) {
                dispatch(uiSetErrors(registerArea, [emailField], "Please provide valid email address"));
                return;
            }

            if (password.length < 8) {
                dispatch(uiSetErrors(registerArea, [passwordField], "Password must be at least 8 characters long"));
                return;
            }

            if (password !== confirmPassword) {
                dispatch(uiSetErrors(registerArea, [confirmPasswordField], "Passwords don't match"));
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
