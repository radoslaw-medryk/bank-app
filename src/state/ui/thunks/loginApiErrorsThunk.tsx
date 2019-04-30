import { AppDispatch } from "src/state/types";
import { apiErrorToMessage } from "../helpers/apiErrorTypeToMessage";
import { uiSetErrors } from "../actions/UiSetErrors";
import { AreaKey, RegisterFieldKey, LoginFieldKey } from "../state";

const loginArea: AreaKey = "login";

const emailField: LoginFieldKey = "email";
const passwordField: LoginFieldKey = "password";

export const loginApiErrorsThunk = (e: any) => {
    return async (dispatch: AppDispatch) => {
        const dispatchGenericError = () => {
            // TODO [RM]: make better generic error
            dispatch(uiSetErrors(loginArea, [passwordField], "Unexpected error occured"));
        };

        if (
            !e ||
            !e.response ||
            !e.response.status ||
            !e.response.data ||
            !e.response.data.errors ||
            !Array.isArray(e.response.data.errors)
        ) {
            dispatchGenericError();
            return;
        }

        const errors: any[] = e.response.data.errors;
        for (const error of errors) {
            const type = error ? error.type || undefined : undefined;
            const key = error ? error.key || undefined : undefined;

            if (type === "resource_doesnt_exists") {
                dispatch(uiSetErrors(loginArea, [passwordField], "Email or password is not correct"));
                continue;
            }

            const allowedFields: RegisterFieldKey[] = [emailField, passwordField];
            if (!type || !key || !allowedFields.includes(key)) {
                dispatchGenericError();
                continue;
            }

            const message = apiErrorToMessage(error);
            dispatch(uiSetErrors(loginArea, [key], message));
        }
    };
};
