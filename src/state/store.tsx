import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { accountsReducer } from "./accounts/reducer";
import { uiReducer } from "./ui/reducer";
import { authReducer } from "./auth/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { friendsReducer } from "./friends/reducer";

const reducers = combineReducers({
    accounts: accountsReducer,
    ui: uiReducer,
    auth: authReducer,
    friends: friendsReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof reducers>;
