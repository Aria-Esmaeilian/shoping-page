import IndexSearch from "./search/indexsearch";
import Indexmain from "./main/indexmain";
import Asidecard from "./aside/asidecard";
import { WeatherProvider } from "../context/WeatherContext";

export default function Index() {
  return (
    <WeatherProvider>
      <div className="min-h-dvh bg-slate-900 px-23 pb-0">
        <IndexSearch />
        <div className="mt-6 flex gap-6">
          <div className="min-w-0 flex-[2]">
            <Indexmain />
          </div>
          <div className="min-w-0 flex-1">
            <Asidecard />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}
