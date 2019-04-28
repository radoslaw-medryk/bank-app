import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { accountsReducer } from "./accounts/reducer";
import { uiReducer } from "./ui/reducer";
import { authReducer } from "./auth/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    accounts: accountsReducer,
    ui: uiReducer,
    auth: authReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// TODO [RM]: TEMP, DEBUG ONLY
store.subscribe(() => {
    console.log(store.getState());
});

export type AppState = ReturnType<typeof reducers>;
