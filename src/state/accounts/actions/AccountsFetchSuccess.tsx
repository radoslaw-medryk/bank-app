import { AccountsActionType } from "./AccountsAction";
import { FetchId } from "src/state/FetchState";
import { AccountsFetchStateData } from "../state";

export type AccountsFetchSuccess = {
    type: AccountsActionType.AccountsFetchSuccess;
    id: FetchId;
    data: AccountsFetchStateData;
};

export const accountsFetchSuccess = (id: FetchId, data: AccountsFetchStateData): AccountsFetchSuccess => ({
    type: AccountsActionType.AccountsFetchSuccess,
    id: id,
    data: data,
});
