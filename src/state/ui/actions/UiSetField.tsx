import { UiActionType } from "./UiAction";

export type UiSetField = {
    type: UiActionType.SetField;
    field: string;
    value: string | undefined;
};

export const uiSetField = (field: string, value: string | undefined): UiSetField => ({
    type: UiActionType.SetField,
    field: field,
    value: value,
});
