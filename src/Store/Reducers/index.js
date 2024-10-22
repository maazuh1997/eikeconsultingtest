import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const PersistConfig = {
    key: "root",
    storage: storage,
    whitelist: [
     
    ],
  };

const AppReducers = combineReducers({
 
});

const Reducer = (state, action) => {
 
  return AppReducers(state, action);
};
const persistedReducer = persistReducer(PersistConfig, Reducer);

export default persistedReducer;
