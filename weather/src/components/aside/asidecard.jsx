import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";

export default function Asidecard() {
  const [days, setDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const { city } = useWeather();

  useEffect(() => {
    async function fetchData() {
      try {
        const get = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=66c13bf870834b8bbdc160335261310&q=${encodeURIComponent(city)}&days=7`,
        );

        const data = await get.json();

        if (!get.ok) {
          return;
        }

        setDays(data.forecast.forecastday);
        setSelectedDate(data.forecast.forecastday[0].date);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchData();
  }, [city]);

  const selectedDay = days.find((item) => item.date === selectedDate);

  return (
    <div className="flex max-h-[700px] flex-col gap-3 overflow-hidden rounded-xl bg-slate-800 p-4 text-white">
      <div className="relative flex shrink-0 items-center justify-between">
        <p>hourly forecast</p>

        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="cursor-pointer appearance-none rounded-lg bg-slate-700 py-2 pl-3 pr-6 text-white outline-none"
        >
          {days.map((item) => (
            <option
              key={item.date}
              value={item.date}
              className="bg-slate-800 text-white"
            >
              {new Date(item.date + "T12:00:00").toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white">
          ▼
        </span>
      </div>

      {selectedDay && (
        <div className="flex min-h-0 flex-col gap-3 overflow-y-auto pr-1">
          {selectedDay.hour.map((hour) => (
            <div
              key={hour.time}
              className="flex shrink-0 items-center justify-between rounded-xl bg-slate-700 p-4 text-white"
            >
              <div className="flex items-center gap-6">
                <img
                  src={`https:${hour.condition.icon}`}
                  alt={hour.condition.text}
                  className="h-10 w-10"
                />

                <p className="text-sm">
                  {new Date(hour.time.replace(" ", "T")).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                      hour12: true,
                    },
                  )}
                </p>
              </div>

              <p className="font-bold">{Math.round(hour.temp_c)}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
