//general
import { configureStore } from "@reduxjs/toolkit";
//reducers
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
