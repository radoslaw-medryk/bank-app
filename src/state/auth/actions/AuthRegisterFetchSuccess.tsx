import { FetchId } from "src/state/FetchState";
import { AuthActionType } from "./AuthAction";
import { ApiRegisterUserResponse } from "@radoslaw-medryk/bank-core-shared";

export type AuthRegisterFetchSuccess = {
    type: AuthActionType.RegisterFetchSuccess;
    id: FetchId;
    data: ApiRegisterUserResponse;
};

export const authRegisterFetchSuccess = (id: FetchId, data: ApiRegisterUserResponse): AuthRegisterFetchSuccess => ({
    type: AuthActionType.RegisterFetchSuccess,
    id: id,
    data: data,
});
