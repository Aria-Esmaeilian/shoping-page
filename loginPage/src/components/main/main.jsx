import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditProfile from "../editprofile/editprofile";

export default function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  function handleLogout() {
    navigate("/login", { replace: true });
  }

  async function handleSave(updatedUser) {
    const response = await fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      const data = await response.json();
      setEdit(false);

      navigate("/main", {
        replace: true,
        state: { user: data },
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#18181B] p-6 text-white selection:bg-gray-600">
      <div className="mx-auto flex max-w-7xl gap-6">
        <aside className="hidden h-[calc(100vh-63px)] w-64 shrink-0 flex-col self-start rounded-2xl border border-[#3F3F46] bg-black p-6 shadow-lg shadow-black/20 md:flex">
          <h1 className="mb-12 text-2xl font-bold uppercase tracking-widest">
            {user.firstname}
            <span className="text-gray-500">.</span>
          </h1>
          <nav className="flex flex-1 flex-col gap-3">
            <button className="cursor-pointer rounded-xl bg-white p-3 text-left font-semibold text-black transition duration-200 hover:bg-gray-300">
              Dashboard
            </button>

            <button className="cursor-pointer rounded-xl p-3 text-left text-gray-400 transition duration-200 hover:bg-[#27272A] hover:text-white">
              My Profile
            </button>

            <button className="cursor-pointer rounded-xl p-3 text-left text-gray-400 transition duration-200 hover:bg-[#27272A] hover:text-white">
              Settings
            </button>
          </nav>
          <button
            onClick={handleLogout}
            className="cursor-pointer mt-8 rounded-xl border border-[#3F3F46] p-3 text-gray-300 transition duration-200 hover:border-gray-500 hover:bg-[#27272A] hover:text-white"
          >
            Logout
          </button>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-sm tracking-widest text-gray-500">
                YOUR PERSONAL SPACE
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                Welcome back, {user.firstname}
              </h2>
              <p className="mt-3 text-gray-400">
                Here is your account overview.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#52525B] bg-[#27272A] text-lg font-bold shadow-md shadow-black/20">
              {user.firstname?.charAt(0)}
              {user.lasttname?.charAt(0)}
            </div>
          </header>

          <section className="mb-6 rounded-2xl border border-[#3F3F46] bg-black p-6 shadow-lg shadow-black/20 transition-colors duration-300 md:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-[#3F3F46] bg-[#27272A] text-3xl font-bold shadow-inner">
                {user.firstname?.charAt(0)}
                {user.lasttname?.charAt(0)}
              </div>

              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold">
                    {user.firstname} {user.lasttname}
                  </h3>
                  <span className="rounded-full border border-emerald-800 bg-emerald-950 px-3 py-1 text-xs text-emerald-400">
                    Active
                  </span>
                </div>

                <p className="text-gray-400">{user.email}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Welcome to your personal dashboard.
                </p>
              </div>

              <button
                onClick={() => setEdit(!edit)}
                className="cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-black transition duration-200 hover:bg-gray-300 active:scale-95"
              >
                {edit ? "Cancel" : "Edit Profile"}
              </button>
            </div>
          </section>

          {edit && (
            <div className="cursor-pointer mb-6">
              <EditProfile
                user={user}
                onCancel={() => setEdit(false)}
                onSave={handleSave}
              />
            </div>
          )}

          <section className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#3F3F46] bg-black p-5 shadow-md shadow-black/10 transition duration-200 hover:border-[#52525B]">
              <p className="text-sm text-gray-400">Account Status</p>
              <h3 className="mt-4 text-2xl font-bold">Active</h3>
              <p className="mt-2 text-sm text-gray-500">
                Your account is active
              </p>
            </div>

            <div className="rounded-2xl border border-[#3F3F46] bg-black p-5 shadow-md shadow-black/10 transition duration-200 hover:border-[#52525B]">
              <p className="text-sm text-gray-400">Profile Completion</p>
              <h3 className="mt-4 text-2xl font-bold">80%</h3>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#27272A]">
                <div className="h-full w-4/5 rounded-full bg-gray-300 transition-all duration-300"></div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#3F3F46] bg-black p-5 shadow-md shadow-black/10 transition duration-200 hover:border-[#52525B]">
              <p className="text-sm text-gray-400">Membership</p>
              <h3 className="mt-4 text-2xl font-bold">Standard</h3>
              <p className="mt-2 text-sm text-gray-500">Personal account</p>
            </div>
          </section>

          <section className="rounded-2xl border border-[#3F3F46] bg-black p-6 shadow-lg shadow-black/20 transition-colors duration-300 md:p-8">
            <h3 className="mb-6 text-xl font-bold">Personal Information</h3>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-b border-[#27272A] pb-4">
                <p className="mb-2 text-sm text-gray-500">First Name</p>
                <p className="font-medium">{user.firstname}</p>
              </div>

              <div className="border-b border-[#27272A] pb-4">
                <p className="mb-2 text-sm text-gray-500">Last Name</p>
                <p className="font-medium">{user.lasttname}</p>
              </div>

              <div className="border-b border-[#27272A] pb-4 sm:col-span-2">
                <p className="mb-2 text-sm text-gray-500">Email Address</p>
                <p className="break-all font-medium">{user.email}</p>
              </div>
            </div>
          </section>

          <footer className="py-6 text-center text-sm text-gray-600">
            © ARIA.ESMAEILIAN
          </footer>
        </main>
      </div>
    </div>
  );
}
