import { connect } from "react-redux";

import * as React from "react";
import { AppState } from "src/state/store";
import { AppDispatch } from "src/state/types";
import { setTokenThunk } from "src/state/auth/thunks/setTokenThunk";
import { ParsedJson } from "src/helpers/ParsedJson";

const persistedTokenStorageKey = "PersistedToken";
type PersistedToken = {
    token: string | undefined;
    expiresAt: Date | undefined;
};

export type TokenPersistContainerInnerProps = {
    token: string | undefined;
    expiresAt: Date | undefined;
    setTokenFromStorage: (token: string, expiresAt: Date) => void;
};

export const TokenPersistContainerInner: React.SFC<TokenPersistContainerInnerProps> = ({
    token,
    expiresAt,
    setTokenFromStorage,
}) => {
    React.useEffect(() => {
        if (token === undefined || expiresAt === undefined) {
            const persistedTokenJson = window.localStorage.getItem(persistedTokenStorageKey);
            const persistedToken = !!persistedTokenJson
                ? (JSON.parse(persistedTokenJson) as ParsedJson<PersistedToken>)
                : undefined;

            if (!!persistedToken && persistedToken.token && persistedToken.expiresAt) {
                const persistedExpiresAt = new Date(persistedToken.expiresAt);
                const isExpired = persistedExpiresAt.getTime() <= new Date().getTime();
                if (isExpired) {
                    return;
                }

                setTokenFromStorage(persistedToken.token, persistedExpiresAt);
            }
        }
    }, []);

    React.useEffect(() => {
        if (token !== undefined && expiresAt !== undefined) {
            const isExpired = expiresAt.getTime() <= new Date().getTime();
            if (isExpired) {
                return;
            }

            const persistedToken: PersistedToken = {
                token: token,
                expiresAt: expiresAt,
            };
            const persistedTokenJson = JSON.stringify(persistedToken);

            window.localStorage.setItem(persistedTokenStorageKey, persistedTokenJson);
        }
    }, [token]);

    return null;
};

const mapStateToProps = (state: AppState) => ({
    token: state.auth.token,
    expiresAt: state.auth.tokenExpiresAt,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setTokenFromStorage: (token: string, expiresAt: Date) => dispatch(setTokenThunk(token, expiresAt)),
});

export const TokenPersistContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TokenPersistContainerInner);
