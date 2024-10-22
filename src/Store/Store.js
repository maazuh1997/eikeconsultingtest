import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import persistedReducer from './Reducers';

const Store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(Store)
Store.subscribe(async () => {
  // console.log('STATE=>', store.getState());
});
export {Store, persistor};
