import image from "../../assets/download (1).jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setemail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleLogin() {
    if (email === "" || pass === "") {
      setMessage("Please enter email and password");
      return;
    }
    const get = await fetch("http://localhost:3001/users");
    const data = await get.json();
    const user = data.find(
      (item) => item.email === email && item.pass === pass,
    );
    if (user) {
      navigate("/main", { state: { user: user } });
    } else {
      setMessage("Invalid email or password");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#27272A] p-4">
      <div className="flex h-[600px] w-[1000px] max-w-full overflow-hidden rounded-2xl border border-gray-700 bg-black p-3 text-white shadow-2xl">
        <div className="w-1/2">
          <img
            className="h-full w-full rounded-xl object-cover"
            src={image}
            alt="Background"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center bg-black px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            Welcome Back
          </p>

          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white">
            Login Account
          </h2>

          <p className="mb-8 text-sm leading-6 text-gray-400">
            Enter your email and password to access your account
          </p>

          <div className="mb-5">
            <p className="mb-2 text-sm font-medium text-gray-300">Email</p>
            <input
              value={email}
              onChange={(item) => setemail(item.target.value)}
              type="email"
              placeholder="e.g. sara@example.com"
              className="w-full rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 hover:bg-[#303036] focus:border-white"
            />
          </div>

          <div className="mb-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-300">Password</p>
              <Link
                to="/register"
                className="text-xs text-gray-400 transition-colors hover:text-white"
              >
                Forgot password?
              </Link>
            </div>

            <input
              value={pass}
              onChange={(item) => setPass(item.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 hover:bg-[#303036] focus:border-white"
            />
          </div>

          <button
            onClick={handleLogin}
            className="mt-5 w-full cursor-pointer rounded-lg bg-white py-3 font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-gray-300 active:scale-[0.98]"
          >
            Login
          </button>
          <p className="mt-3 text-center text-sm text-red-400">{message}</p>
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="cursor-pointer font-semibold text-white underline underline-offset-4 transition-colors hover:text-gray-300"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
