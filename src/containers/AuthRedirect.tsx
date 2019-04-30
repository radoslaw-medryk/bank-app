import { connect } from "react-redux";
import * as React from "react";
import { Redirect } from "react-router";
import { AppState } from "src/state/store";

export type AuthRedirectInnerProps = {
    when: "not-logged-in" | "logged-in";
    to: string;
    isLoggedIn: boolean;
};

export const AuthRedirectInner: React.SFC<AuthRedirectInnerProps> = ({ when, to, isLoggedIn }) => {
    if ((when === "logged-in" && !isLoggedIn) || (when === "not-logged-in" && isLoggedIn)) {
        return null;
    }

    return <Redirect to={to} />;
};

type AuthRedirectProps = {
    when: "not-logged-in" | "logged-in";
    to: string;
};

// TODO [RM]: consider token expiration, etc and redirect with nice message that session has expired.
const mapStateToProps = (state: AppState, ownProps: AuthRedirectProps): AuthRedirectInnerProps => {
    return {
        isLoggedIn:
            !!state.auth.token &&
            !!state.auth.tokenExpiresAt &&
            state.auth.tokenExpiresAt.getTime() > new Date().getTime(),
        ...ownProps,
    };
};

export const AuthRedirect = connect(mapStateToProps)(AuthRedirectInner);
