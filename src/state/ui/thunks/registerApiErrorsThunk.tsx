import { AppDispatch } from "src/state/types";
import { apiErrorToMessage } from "../helpers/apiErrorTypeToMessage";
import { uiSetErrors } from "../actions/UiSetErrors";
import { AreaKey, RegisterFieldKey } from "../state";

const registerArea: AreaKey = "register";

const emailField: RegisterFieldKey = "email";
const passwordField: RegisterFieldKey = "password";

export const registerApiErrorsThunk = (e: any) => {
    return async (dispatch: AppDispatch) => {
        const dispatchGenericError = () => {
            // TODO [RM]: make better generic error
            dispatch(uiSetErrors(registerArea, [emailField], "Unexpected error occured"));
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

            if (type === "resource_already_exists") {
                dispatch(uiSetErrors(registerArea, [emailField], "User with such email already exists"));
                continue;
            }

            const allowedFields: RegisterFieldKey[] = [emailField, passwordField];
            if (!type || !key || !allowedFields.includes(key)) {
                dispatchGenericError();
                continue;
            }

            const message = apiErrorToMessage(error);
            dispatch(uiSetErrors(registerArea, [key], message));
        }
    };
};
