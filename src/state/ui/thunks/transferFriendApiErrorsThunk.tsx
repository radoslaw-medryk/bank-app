import { AppDispatch } from "src/state/types";
import { apiErrorToMessage } from "../helpers/apiErrorTypeToMessage";
import { uiSetErrors } from "../actions/UiSetErrors";
import { AreaKey, TransferFriendKey } from "../state";

const transferFriendArea: AreaKey = "transferFriend";

const valueField: TransferFriendKey = "amount";

export const transferFriendApiErrorsThunk = (e: any) => {
    return async (dispatch: AppDispatch) => {
        const dispatchGenericError = () => {
            // TODO [RM]: make better generic error
            dispatch(uiSetErrors(transferFriendArea, [valueField], "Unexpected error occured"));
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

            const allowedFields: TransferFriendKey[] = [valueField];
            if (!type || !key || !allowedFields.includes(key)) {
                dispatchGenericError();
                continue;
            }

            const message = apiErrorToMessage(error);
            dispatch(uiSetErrors(transferFriendArea, [key], message));
        }
    };
};
