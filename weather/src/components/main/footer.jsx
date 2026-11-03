import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";

export default function Footer() {
  const [days, setDays] = useState([]);
  const { city } = useWeather();

  useEffect(() => {
    async function fetchData() {
      try {
        const get = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=66c13bf870834b8bbdc160335261310&q=${encodeURIComponent(city)}&days=7`,
        );

        const data = await get.json();

        if (!get.ok) {
          throw new Error(data.error?.message || "Failed to fetch data");
        }

        setDays(data.forecast.forecastday);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    fetchData();
  }, [city]);

  return (
    <div className="mt-4 rounded-2xl  bg-slate-800 p-5 text-white">
      <h2 className="mb-5 text-lg font-semibold">Daily Forecast</h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {days.map((item) => (
          <div
            key={item.date}
            className="flex flex-col items-center rounded-xl  bg-slate-700 p-4 transition duration-200 hover:-translate-y-1"
          >
            <p className="text-sm font-medium text-slate-300">
              {new Date(item.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              src={`https:${item.day.condition.icon}`}
              alt={item.day.condition.text}
              className="my-3 h-12 w-12 object-contain"
            />
            <div className="flex gap-10">
              <p className="mt-1 text-sm text-slate-400">
                {Math.ceil(item.day.maxtemp_c)}°
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {Math.floor(item.day.mintemp_c)}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
