import * as React from "react";

// Used to allow sending form with [Enter] key (imput type="submit" needed for that)
// https://stackoverflow.com/questions/477691/submitting-a-form-by-pressing-enter-without-a-submit-button

export type HiddenSubmitProps = {
    //
};

export const HiddenSubmit: React.SFC<HiddenSubmitProps> = ({}) => {
    return (
        <input
            type="submit"
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }}
            tabIndex={-1}
        />
    );
};
