import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Article } from "./interfaces";
import { fetchNews } from "./newsAPI";

export interface newsState {
  articles: Article[];
  status: "idle" | "loading" | "failed";
}

const initialState: newsState = {
  articles: [],
  status: "idle",
};

export const fetchNewsAsync = createAsyncThunk(
  "news/fetchNews",
  async (category?: string) => {
    return await fetchNews(category);
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.articles = action.payload;
      })
      .addCase(fetchNewsAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default newsSlice.reducer;
