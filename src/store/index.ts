import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import pokemonReducer from './pokemons/pokemons'
import { useDispatch, useSelector } from 'react-redux'
import { localStorageMiddleware } from './middleware/local-storage-middleware'
import type { Middleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    pokemons:pokemonReducer
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware as Middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // New
export const useAppSelector = useSelector.withTypes<RootState>()
