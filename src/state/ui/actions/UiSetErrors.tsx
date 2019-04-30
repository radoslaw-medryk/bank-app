import { UiActionType } from "./UiAction";
import { AreaKey } from "../state";

export type UiSetErrors = {
    type: UiActionType.SetErrors;
    area: string;
    fields: string[];
    value: string | undefined;
};

export const uiSetErrors = (area: AreaKey, fields: string[], value: string | undefined): UiSetErrors => ({
    type: UiActionType.SetErrors,
    area: area,
    fields: fields,
    value: value,
});
