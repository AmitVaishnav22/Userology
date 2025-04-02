import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const WEATHER_API = process.env.NEXT_PUBLIC_WEATHER_API;

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&units=metric`);
  return { city, data: response.data };
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cities: ["New York", "London", "Tokyo"],
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data[action.payload.city] = action.payload.data;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
