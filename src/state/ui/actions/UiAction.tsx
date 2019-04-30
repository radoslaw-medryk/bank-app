import { UiSetField } from "./UiSetField";
import { UiSetErrors } from "./UiSetErrors";

export enum UiActionType {
    SetField = "UiSetField",
    SetErrors = "UiSetErrors",
}

export type UiAction = UiSetField | UiSetErrors;
