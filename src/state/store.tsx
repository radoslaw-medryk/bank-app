import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { transactionsReducer } from "./transactions/reducer";
import { uiReducer } from "./ui/reducer";
import { authReducer } from "./auth/reducer";

const reducers = combineReducers({
    transactions: transactionsReducer,
    ui: uiReducer,
    auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

// TODO [RM]: TEMP, DEBUG ONLY
store.subscribe(() => {
    console.log(store.getState());
});

export type AppState = ReturnType<typeof reducers>;
