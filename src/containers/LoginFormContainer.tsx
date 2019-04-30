import { connect } from "react-redux";
import { LoginForm, LoginFormProps } from "src/components/LoginForm";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { uiSetField } from "src/state/ui/actions/UiSetField";
import { authLoginThunk } from "src/state/auth/thunks/authLoginThunk";
import { AreaKey, LoginFieldKey } from "src/state/ui/state";
import { isFetchLoading } from "src/state/helpers/isFetchLoading";
import { uiSetErrors } from "src/state/ui/actions/UiSetErrors";
import { Validation } from "rusane";

const loginArea: AreaKey = "login";

const emailField: LoginFieldKey = "email";
const passwordField: LoginFieldKey = "password";

const mapStateToProps = (state: AppState) => {
    const fields = state.ui.fields[loginArea] || {};
    const errors = state.ui.errors[loginArea] || {};

    return {
        emailValue: fields[emailField] || "",
        emailError: errors[emailField],

        passwordValue: fields[passwordField] || "",
        passwordError: errors[passwordField],

        isLoading: isFetchLoading(state.auth.loginFetch),
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onFieldChanged: (field: LoginFieldKey, value: string) => {
            dispatch(uiSetField(loginArea, field, value));
            dispatch(uiSetErrors(loginArea, [field], undefined));
        },

        onSubmit: (email: string, password: string) => {
            if (email.length < 5 || Validation.validateEmail(email).error) {
                dispatch(uiSetErrors(loginArea, [emailField], "Please provide valid email address"));
                return;
            }

            if (password.length === 0) {
                dispatch(uiSetErrors(loginArea, [passwordField], "Please provide password"));
                return;
            }

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
