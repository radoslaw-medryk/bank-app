import { ApiAccessTokenResponse } from "@radoslaw-medryk/bank-core-shared";
import { AuthData } from "src/models/AuthData";

export const mapAuthData = (apiResponse: ApiAccessTokenResponse): AuthData => ({
    token: apiResponse.token,
});
