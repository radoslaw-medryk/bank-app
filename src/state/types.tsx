import { TransactionsAction } from "./transactions/actions/TransactionsAction";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "./store";

export type AppAction = TransactionsAction;

export type AppThunkAction<R> = ThunkAction<R, AppState, undefined, AppAction>;

export type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;
