import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const NEWS_API = process.env.NEXT_PUBLIC_NEWS_API;

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(`https://newsdata.io/api/1/news`, {
    params: {
      apikey: NEWS_API,
      q: "cryptocurrency",
      language: "en",
    },
  });
  return response.data.results;
});

const newsSlice = createSlice({
  name: "news",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.slice(0, 5);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
