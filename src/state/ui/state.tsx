export type AreaKey = "login" | "register" | "transferFriend" | "addFriend";

export type LoginFieldKey = "email" | "password";
export type RegisterFieldKey = "email" | "password" | "confirmPassword";
export type TransferFriendKey = "amount";
export type AddFriendKey = "email";

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
