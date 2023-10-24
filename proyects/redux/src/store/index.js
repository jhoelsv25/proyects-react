import { configureStore } from "@reduxjs/toolkit";
import usersReducr from "./users/slice";

const persistenceMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("users", JSON.stringify(store.getState()));
};
export const store = configureStore({
  reducer: {
    users: usersReducr,
  },
  middleware: [persistenceMiddleware],
});
