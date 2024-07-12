/*import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import { thunk } from "redux-thunk";*/
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./reducers/root-reducer";

/*const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);*/

export const store = configureStore({
  reducer: rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch