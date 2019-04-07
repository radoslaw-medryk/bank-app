import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { transactionsReducer } from "./transactions/reducer";

const reducers = combineReducers({
    transactions: transactionsReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

// TODO [RM]: TEMP, DEBUG ONLY
store.subscribe(() => {
    console.log(store.getState());
});

export type AppState = ReturnType<typeof reducers>;
