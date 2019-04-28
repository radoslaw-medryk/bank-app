import { AuthActionType } from "./AuthAction";

export type AuthSetToken = {
    type: AuthActionType.SetToken;
    token: string | undefined;
    expiresAt: Date | undefined;
};

export const authSetToken = (token: string | undefined, expiresAt: Date | undefined): AuthSetToken => ({
    type: AuthActionType.SetToken,
    token: token,
    expiresAt: expiresAt,
});
