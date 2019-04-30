import { AuthActionType } from "./AuthAction";

export type AuthSetProfile = {
    type: AuthActionType.SetProfile;
    email: string | undefined;
};

export const authSetProfile = (email: string | undefined): AuthSetProfile => ({
    type: AuthActionType.SetProfile,
    email: email,
});
