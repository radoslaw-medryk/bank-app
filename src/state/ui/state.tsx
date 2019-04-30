export type AreaKey = "login" | "register";

export type LoginFieldKey = "email" | "password";
export type RegisterFieldKey = "email" | "password" | "confirmPassword";

type Area<T> = {
    [area: string]: {
        [field: string]: T | undefined;
    };
};

export type UiState = {
    fields: Area<string>;
    errors: Area<string>;
};

export const initialUiState: UiState = {
    fields: {},
    errors: {},
};
