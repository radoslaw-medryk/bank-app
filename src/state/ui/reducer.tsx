import { initialUiState, UiState } from "./state";
import { AppAction } from "../types";
import { UiSetField } from "./actions/UiSetField";
import { UiActionType } from "./actions/UiAction";

export const uiReducer = (state: UiState = initialUiState, action: AppAction): UiState => {
    switch (action.type) {
        case UiActionType.SetField:
            return setField(state, action);
    }

    return state;
};

const setField = (state: UiState, action: UiSetField): UiState => {
    const newState: UiState = {
        ...state,
        fields: {
            ...state.fields,
            [action.field]: action.value,
        },
    };

    return newState;
};
