//general
import { rootReducer } from "./rootReducer";
//store
import { store } from "./store";

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
