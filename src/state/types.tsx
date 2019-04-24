import { TransactionsAction } from "./transactions/actions/TransactionsAction";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "./store";
import { UiAction } from "./ui/actions/UiAction";
import { AuthAction } from "./auth/actions/AuthAction";

export type AppAction = TransactionsAction | UiAction | AuthAction;

export type AppThunkAction<R> = ThunkAction<R, AppState, undefined, AppAction>;

export type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
