import { ApiError } from "@radoslaw-medryk/bank-core-shared";

export const apiErrorToMessage = (error: ApiError): string => {
    switch (error.type) {
        case "big_quant":
            return `Value must be multiple of ${error.quant}`;

        case "big_range":
            return `Value must be ${[
                error.minValue && `min. ${error.minValue}`,
                error.maxValue && `max. ${error.maxValue}`,
            ].join(", ")}`;

        case "exception":
            return `Unexpected error occured`;

        case "invalid_value":
            return `Value is not valid`;

        case "missing_value":
            return `Value is required`;

        case "number_integer":
            return `Value must be integer`;

        case "number_range":
            return `Value must be ${[
                error.minValue && `min. ${error.minValue}`,
                error.maxValue && `max. ${error.maxValue}`,
            ].join(", ")}`;

        case "other":
            return `Unexpected error occured`;

        case "resource_already_exists":
            return `Such ${error.resourceName || "respource"} already exists`;

        case "resource_doesnt_exists":
            return `Expected ${error.resourceName || "respource"} doesn't exists`;

        case "string_length":
            return `Value length must be ${[
                error.minLength && `min. ${error.minLength}`,
                error.maxLength && `max. ${error.maxLength}`,
            ].join(", ")}`;
    }

    return `Unexpected error occured`;
};
