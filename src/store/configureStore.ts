import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
