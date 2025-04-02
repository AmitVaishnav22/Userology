import { useSelector } from "react-redux";
import Link from "next/link";

export default function WeatherSection() {
  const { data, loading, error } = useSelector((state) => state.weather);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error fetching weather data: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">Weather</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(data).map((city) => (
          <Link 
            key={city} 
            href={`/weather/${city}`} 
            className="bg-gray-900 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-700 block"
          >
            <h3 className="text-lg font-semibold">{city}</h3>
            <p className="text-sm"> Temperature: {data[city].main.temp}°C</p>
            <p className="text-sm"> Condition: {data[city].weather[0].description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
