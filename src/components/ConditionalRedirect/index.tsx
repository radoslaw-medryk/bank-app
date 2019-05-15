import * as React from "react";
import { Redirect } from "react-router";

export type ConditionalRedirectProps = {
    when?: boolean;
    onBeforeRedirect?: () => void;
    to: string;
};

export const ConditionalRedirect: React.SFC<ConditionalRedirectProps> = ({ when, onBeforeRedirect, to }) => {
    React.useEffect(() => {
        if (when) {
            onBeforeRedirect && onBeforeRedirect();
        }
    }, [when]);

    if (!when) {
        return null;
    }

    return <Redirect to={to} />;
};
