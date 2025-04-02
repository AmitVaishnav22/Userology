"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import { getWeather } from "../../utils/api"; 
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function CityDetails() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!city) return; 
    const fetchWeatherHistory = async () => {
      try {
        const response = await getWeather(city);
        setWeatherData(response.data);
        const historicalData = Array.from({ length: 5 }, (_, i) => ({
          time: `${new Date().getHours() - i}h`,
          temp: response.data.main.temp + (Math.random() * 2 - 1),
        })).reverse();

        setHistory(historicalData);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeatherHistory();
  }, [city]);

  if (!weatherData) return <p>Loading weather details...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">{city} Weather Details</h1>
      <p> Temperature: {weatherData.main.temp}°C</p>
      <p> Humidity: {weatherData.main.humidity}%</p>
      <p> Condition: {weatherData.weather[0].description}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Temperature (Last 5 Hours)</h2>
        <Line
          data={{
            labels: history.map((entry) => entry.time),
            datasets: [
              {
                label: "Temperature (°C)",
                data: history.map((entry) => entry.temp),
                borderColor: "#4A90E2",
                backgroundColor: "rgba(74, 144, 226, 0.2)",
                fill: true,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
