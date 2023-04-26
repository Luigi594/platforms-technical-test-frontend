import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { platformApi } from "./services/platforms";
import { platformSlice } from "./sliice/platforms.slice";

export const store = configureStore({
  reducer: {
    id: platformSlice.reducer,
    [platformApi.reducerPath]: platformApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(platformApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
