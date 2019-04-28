import { AccountsActionType } from "./AccountsAction";
import { FetchId } from "src/state/FetchState";

export type AccountsFetchStart = {
    type: AccountsActionType.AccountsFetchStart;
    id: FetchId;
};

export const accountsFetchStart = (id: FetchId): AccountsFetchStart => ({
    type: AccountsActionType.AccountsFetchStart,
    id: id,
});
