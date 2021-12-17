import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  authenticationReducer,
  userReducer,
  searchReducer,
  companiesReducer,
} from './ducks';
import { watchSaga } from './sagas';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  auth: authenticationReducer,
  user: userReducer,
  search: searchReducer,
  companies: companiesReducer,
});

const persisted = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persisted,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(watchSaga);

export default store;

export const persister = persistStore(store);

export type RootState = ReturnType<typeof reducer>;
