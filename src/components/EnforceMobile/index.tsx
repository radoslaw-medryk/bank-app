import * as React from "react";
import { MobileDetector } from "../MobileDetector";
import { withRouter, RouteComponentProps } from "react-router";

export type EnforceMobileInnerProps = RouteComponentProps & {
    redirect: string;
};

export const EnforceMobileInner: React.SFC<EnforceMobileInnerProps> = ({ redirect, history, location }) => {
    const isMobileChanged = (isMobile: boolean) => {
        if (!isMobile && location.pathname !== redirect) {
            history.push(redirect);
        }
    };

    return <MobileDetector onIsMobileChanged={isMobileChanged} />;
};

export const EnforceMobile = withRouter(EnforceMobileInner);
