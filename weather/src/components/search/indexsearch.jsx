import { useState } from "react";
import { useWeather } from "../../context/WeatherContext";

export default function IndexSearch() {
  const { setCity } = useWeather();
  const [inputCity, setInputCity] = useState("");

  function searchCity(e) {
    e.preventDefault();

    const newCity = inputCity.trim();

    if (!newCity) return;

    setCity(newCity);
  }

  return (
    <div className=" rounded-2xl bg-slate-900 p-5 text-white flex justify-center">
      <div className="w-200">
        <form onSubmit={searchCity} className="flex gap-3">
          <input
            type="text"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Search for a city..."
            className="min-w-0 flex-1 rounded-xl bg-slate-700 px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
