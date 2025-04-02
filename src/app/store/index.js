import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice.js";
import cryptoReducer from "./cryptoSlice";
import newsReducer from "./newsSlice";
import websocketReducer from "./websocketSlice";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
    news: newsReducer,
    websocket: websocketReducer,
    notifications: notificationReducer,
  },
});
