import { configureStore } from "@reduxjs/toolkit";
import ListSclices, { ListSclice } from "../Sclices/ListSclices";
const store = configureStore({
  reducer: {
    showong: ListSclice.reducer,
  },
});

export { store };
export * from "../Allposts/Pagii";
