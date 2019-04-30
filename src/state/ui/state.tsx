export type UiState = {
    fields: {
        [key: string]: string | undefined;
    };

    errors: {
        [key: string]: string | undefined;
    };
};

export const initialUiState: UiState = {
    fields: {},
    errors: {},
};
