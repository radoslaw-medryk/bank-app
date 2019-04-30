import { initialUiState, UiState } from "./state";
import { AppAction } from "../types";
import { UiSetField } from "./actions/UiSetField";
import { UiActionType } from "./actions/UiAction";
import { UiSetErrors } from "./actions/UiSetErrors";

export const uiReducer = (state: UiState = initialUiState, action: AppAction): UiState => {
    switch (action.type) {
        case UiActionType.SetField:
            return setField(state, action);

        case UiActionType.SetErrors:
            return setErrors(state, action);
    }

    return state;
};

const setField = (state: UiState, action: UiSetField): UiState => {
    const newState: UiState = {
        ...state,
        fields: {
            ...state.fields,
            [action.area]: {
                ...state.fields[action.area],
                [action.field]: action.value,
            },
        },
    };

    return newState;
};

const setErrors = (state: UiState, action: UiSetErrors): UiState => {
    const newErrors: { [key: string]: string | undefined } = {};
    for (const field of action.fields) {
        newErrors[field] = action.value;
    }

    const newState: UiState = {
        ...state,
        errors: {
            ...state.errors,
            [action.area]: {
                ...state.errors[action.area],
                ...newErrors,
            },
        },
    };

    return newState;
};
