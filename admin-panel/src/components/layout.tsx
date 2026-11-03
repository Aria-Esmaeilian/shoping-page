import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../pages/theme";

export default function Layout() {
  const { dark, setDark } = useTheme();

  return (
    <div
      dir="rtl"
      className={`flex h-dvh w-full overflow-hidden ${
        dark ? "bg-[rgb(17,24,39)] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <header
          className={`z-10 flex h-20 shrink-0 items-center border-b px-8 ${
            dark
              ? "border-gray-700 bg-[rgb(17,24,39)] text-white"
              : "border-gray-200 bg-white text-gray-900"
          }`}
        >
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg p-2 transition hover:bg-gray-500/20"
            aria-label="Change theme"
          >
            <img
              src="/icons8-moon-50.png"
              alt="Theme"
              className={`h-6 w-6 ${dark ? "invert" : ""}`}
            />
          </button>
        </header>

        <main
          dir="ltr"
          className={`min-h-0 flex-1 overflow-y-auto px-10 py-10 ${
            dark ? "bg-[rgb(17,24,39)] text-white" : "bg-gray-50 text-gray-900"
          }`}
        >
          <Outlet />
        </main>
      </div>

      <aside
        className={`flex h-dvh w-[22%] shrink-0 flex-col items-end gap-3 overflow-y-auto rounded-2xl px-2 py-8 ${
          dark ? "bg-[rgb(35,44,58)] text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <p className="mb-4 ml-6 text-sm text-gray-400">PAGES</p>

        <Link
          to="/Dashbord"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              ɸ
            </span>
            <span>Dashbord</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>

        <Link
          to="/"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              ⨳
            </span>
            <span>Custome</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>

        <Link
          to="/Finance"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              ʠ
            </span>
            <span>Finance</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>

        <Link
          to="/Jobboard"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              œ
            </span>
            <span>Job Board</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>

        <Link
          to="/Tasks"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              Ŕ
            </span>
            <span>Tasks</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>

        <Link
          to="/Messages"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              ⨌
            </span>
            <span>Messages</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>

        <Link
          to="/Inbox"
          dir="ltr"
          className="group flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-violet-500/10"
        >
          <div className="flex items-center">
            <span className="mr-4 ml-2 rounded px-1 text-sm text-gray-400 transition-colors group-hover:text-violet-500">
              Ø
            </span>
            <span>Inbox</span>
          </div>
          <span className="mb-1">⌵</span>
        </Link>
      </aside>
    </div>
  );
}
