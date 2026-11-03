import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";

export default function Navbar() {
  const [weather, setWeather] = useState(null);
  const { city } = useWeather();

  useEffect(() => {
    async function fetchAmchData() {
      try {
        const get = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=66c13bf870834b8bbdc160335261310&q=${encodeURIComponent(city)}`,
        );

        const data = await get.json();

        if (!get.ok) {
          throw new Error(data.error?.message || "Failed to fetch data");
        }

        setWeather(data.current);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchAmchData();
  }, [city]);

  if (!weather) {
    return <p>Loading weather...</p>;
  }

  return (
    <div className="flex flex-nowrap gap-4 w-full mt-4">
      <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-800 p-4 text-white">
        <p className="text-xl text-slate-400">Feels like</p>
        <p className="mt-3 text-xl font-semibold">{weather.feelslike_c}°C</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-800 p-4 text-white">
        <p className="text-sm text-slate-400">Humidity</p>
        <p className="mt-2 text-xl font-semibold">{weather.humidity}%</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-800 p-4 text-white">
        <p className="text-sm text-slate-400">Wind</p>
        <p className="mt-2 text-xl font-semibold">{weather.wind_kph} km/h</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center rounded-xl bg-slate-800 p-4 text-white">
        <p className="text-sm text-slate-400">Precipitation</p>
        <p className="mt-2 text-xl font-semibold">{weather.precip_mm} mm</p>
      </div>
    </div>
  );
}
