import { AppDispatch } from "src/state/types";
import { apiErrorToMessage } from "../helpers/apiErrorTypeToMessage";
import { uiSetErrors } from "../actions/UiSetErrors";
import { AreaKey, AddFriendKey } from "../state";

const addFriendArea: AreaKey = "addFriend";
const emailField: AddFriendKey = "email";

export const addFriendApiErrorsThunk = (e: any) => {
    return async (dispatch: AppDispatch) => {
        const dispatchGenericError = () => {
            // TODO [RM]: make better generic error
            dispatch(uiSetErrors(addFriendArea, [emailField], "Unexpected error occured"));
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

            const allowedFields: AddFriendKey[] = [emailField];
            if (!type || !key || !allowedFields.includes(key)) {
                dispatchGenericError();
                continue;
            }

            const message = apiErrorToMessage(error);
            dispatch(uiSetErrors(addFriendArea, [key], message));
        }
    };
};
