import { UiActionType } from "./UiAction";
import { AreaKey } from "../state";

export type UiSetField = {
    type: UiActionType.SetField;
    area: string;
    field: string;
    value: string | undefined;
};

export const uiSetField = (area: AreaKey, field: string, value: string | undefined): UiSetField => ({
    type: UiActionType.SetField,
    area: area,
    field: field,
    value: value,
});
