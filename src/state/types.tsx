import { AccountsAction } from "./accounts/actions/AccountsAction";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "./store";
import { UiAction } from "./ui/actions/UiAction";
import { AuthAction } from "./auth/actions/AuthAction";

export type AppAction = AccountsAction | UiAction | AuthAction;

export type AppThunkAction<R> = ThunkAction<R, AppState, undefined, AppAction>;

export type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
