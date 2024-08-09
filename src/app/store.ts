import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from"./filterSlices/filtersSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './appointment-slice/appointmentaApiSlice'

export const store: any = configureStore({
  reducer: {
    filters: filtersReducer,
    [api.reducerPath]: api.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

