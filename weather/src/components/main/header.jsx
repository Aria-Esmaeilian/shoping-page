import { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";

export default function Header() {
  const [bg, setBg] = useState(null);
  const { city } = useWeather();

  useEffect(() => {
    async function bgheader() {
      try {
        const get = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=66c13bf870834b8bbdc160335261310&q=${encodeURIComponent(city)}`,
        );
        const data = await get.json();

        if (!get.ok) {
          throw new Error(data.error?.message || "Failed to fetch data");
        }

        setBg(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }

    bgheader();
  }, [city]);

  if (!bg) {
    return <p>Loading...</p>;
  }

  const condition = bg.current.condition.text.toLowerCase();
  console.log("Weather condition:", condition);
  const isDay = bg.current.is_day;

  let background = "/day/cloudyday.jpg";

  if (isDay) {
    if (condition.includes("sunny") || condition.includes("clear")) {
      background = "/day/sunny.jpg";
    } else if (
      condition.includes("rain") ||
      condition.includes("drizzle") ||
      condition.includes("shower")
    ) {
      background = "/day/rainyday.jpg";
    } else if (
      condition.includes("snow") ||
      condition.includes("sleet") ||
      condition.includes("blizzard") ||
      condition.includes("ice")
    ) {
      background = "/day/snowyday.jpg";
    } else if (
      condition.includes("fog") ||
      condition.includes("mist") ||
      condition.includes("smog") ||
      condition.includes("haze")
    ) {
      background = "/day/foggyday.jpg";
    } else if (condition.includes("cloud") || condition.includes("overcast")) {
      background = "/day/cloudyday.jpg";
    } else {
      background = "/day/cloudyday.jpg";
    }
  } else {
    if (condition.includes("clear") || condition.includes("sunny")) {
      background = "/night/night.jpg";
    } else if (
      condition.includes("rain") ||
      condition.includes("drizzle") ||
      condition.includes("shower")
    ) {
      background = "/night/Rainy.jpg";
    } else if (
      condition.includes("snow") ||
      condition.includes("sleet") ||
      condition.includes("blizzard") ||
      condition.includes("ice")
    ) {
      background = "/night/snowy.jpg";
    } else if (
      condition.includes("fog") ||
      condition.includes("mist") ||
      condition.includes("smog") ||
      condition.includes("haze")
    ) {
      background = "/night/foggy.jpg";
    } else if (condition.includes("cloud") || condition.includes("overcast")) {
      background = "/night/cloudy.jpg";
    } else {
      background = "/night/cloudy.jpg";
    }
  }

  return (
    <div
      className="relative flex items-center justify-between overflow-hidden rounded-3xl bg-cover bg-center p-9 text-white shadow-xl md:py-20"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="absolute inset-0 bg-black/35"></div>

      <div className="relative z-10 flex w-full items-center justify-between gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-3xl font-bold tracking-wide md:text-4xl">
              {bg.location.name},
            </p>
            <p className="text-3xl font-bold tracking-wide md:text-4xl">
              {bg.location.country}
            </p>
          </div>

          <p className="mt-4 text-sm text-white/80 md:text-base">
            {new Date(
              bg.location.localtime.replace(" ", "T"),
            ).toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="mt-3 flex items-center gap-4">
            <p className="text-sm text-white/80">Local time</p>
            <p className="font-semibold">
              {bg.location.localtime.split(" ")[1]}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-4">
          <img
            src={`https:${bg.current.condition.icon}`}
            alt={bg.current.condition.text}
            className="h-16 w-16 drop-shadow-lg md:h-20 md:w-20"
          />
          <p className="text-5xl font-medium tracking-tight md:text-8xl">
            {Math.round(bg.current.temp_c)}°
          </p>
        </div>
      </div>
    </div>
  );
}
