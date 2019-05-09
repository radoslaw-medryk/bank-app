import { AccountsAction } from "./accounts/actions/AccountsAction";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "./store";
import { UiAction } from "./ui/actions/UiAction";
import { AuthAction } from "./auth/actions/AuthAction";
import { FriendsAction } from "./friends/actions/FriendsAction";

export type AppAction = AccountsAction | UiAction | AuthAction | FriendsAction;

export type AppThunkAction<R> = ThunkAction<R, AppState, undefined, AppAction>;

export type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
