import { createSlice } from "@reduxjs/toolkit";
// import { fetchingData } from "../Allposts/Pagii";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchingData = createAsyncThunk("fetchingdata", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("this is response", response);
  if (response.status === 200) {
    console.log("this is woring on respons");
  }
  return response.data;
});
const ListSclice = createSlice({
  name: "List",
  initialState: {
    data: [],
    isloading: false,
    iserror: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchingData.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchingData.fulfilled, (state, action) => {
      state.isloading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchingData.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = action.error;
    });
  },
});

export { ListSclice, fetchingData };
