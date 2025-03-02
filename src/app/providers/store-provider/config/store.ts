import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import { rtkApi } from "@/shared/api/rtkApi.ts";

import { StateSchema } from "./state-schema.ts";

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(rtkApi.middleware);
    },
  });
};
