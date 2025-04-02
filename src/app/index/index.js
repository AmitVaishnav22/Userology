import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../store/weatherSlice";
import { fetchCrypto } from "../store/cryptoSlice";
import { fetchNews } from "../store/newsSlice";
import { connectWebSocket } from "../utils/websocket";
import { addNotification } from "../store/notificationSlice";
import { simulateWeatherAlerts } from "../utils/weatherAlerts";

import WeatherSection from "../components/WeatherSection";
import CryptoSection from "../components/CryptoSection";
import NewsSection from "../components/NewsSection";
import Header from "../components/Header"
export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather("New York"));
    dispatch(fetchWeather("London"));
    dispatch(fetchWeather("Tokyo"));
    dispatch(fetchCrypto());
    dispatch(fetchNews());
    const socket = connectWebSocket(dispatch, addNotification);
    simulateWeatherAlerts(dispatch, addNotification);

    return () => {
      socket.close();
    };

  }, [dispatch]);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="max-w-6xl mx-auto p-6">
        <WeatherSection />
        <CryptoSection />
        <NewsSection />
      </div>
    </div>
  );
}
