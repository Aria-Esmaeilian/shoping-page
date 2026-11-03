import React from "react";
import image from "../../assets/download (1).jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [firstname, setfirsetname] = useState("");
  const [lasttname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {
    if (firstname === "" || lasttname === "" || email === "" || pass == "") {
      setmessage("Please fill in the fields");
      return;
    }
    if (pass.length < 8) {
      setmessage("Password must be at least 8 characters");
      return;
    }

    const repit = await fetch("http://localhost:3001/users");
    const data = await repit.json();
    const show = data.find((item) => item.email === email);
    if (show) {
      setmessage("you already register");
      return;
    }

    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lasttname: lasttname,
        email: email,
        pass: pass,
      }),
    });
    if (response.ok) {
      setmessage("Registration successful!");
      navigate("/login");
    } else {
      setmessage("Registration failed!");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#27272A] p-4">
      <div className="flex h-[600px] w-[1000px] max-w-full overflow-hidden rounded-sm border border-gray-700 bg-black p-3 text-white shadow-2xl">
        <div className="w-1/2">
          <img
            className="h-full w-full rounded-sm object-cover"
            src={image}
            alt="Background"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center bg-black px-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
            CREATE ACCOUNT
          </p>

          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white">
            Sign Up Account
          </h2>

          <p className="mb-8 max-w-sm text-sm leading-6 text-gray-400">
            Enter your personal data to create your account
          </p>

          <div className="mb-5 flex gap-4">
            <div className="flex-1">
              <p className="mb-2 text-sm font-medium tracking-wide text-gray-300">
                First Name
              </p>
              <input
                value={firstname}
                onChange={(item) => setfirsetname(item.target.value)}
                type="text"
                placeholder="e.g. Sara"
                className="w-full rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 hover:bg-[#303036] focus:border-white"
              />
            </div>

            <div className="flex-1">
              <p className="mb-2 text-sm font-medium tracking-wide text-gray-300">
                Last Name
              </p>
              <input
                value={lasttname}
                onChange={(item) => setlastname(item.target.value)}
                type="text"
                placeholder="e.g. Fashay"
                className="w-full rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 hover:bg-[#303036] focus:border-white"
              />
            </div>
          </div>

          <div className="mb-5">
            <p className="mb-2 text-sm font-medium tracking-wide text-gray-300">
              Email
            </p>
            <input
              value={email}
              onChange={(item) => setemail(item.target.value)}
              type="email"
              placeholder="e.g. sara@example.com"
              className="w-full rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 hover:bg-[#303036] focus:border-white"
            />
          </div>

          <div className="mb-3">
            <p className="mb-2 text-sm font-medium tracking-wide text-gray-300">
              Password
            </p>
            <input
              value={pass}
              onChange={(item) => setpass(item.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#3F3F46] bg-[#27272A] p-3 text-white placeholder-gray-400 outline-none transition-colors duration-200 hover:bg-[#303036] focus:border-white"
            />
            <span className="mt-2 block text-xs text-gray-500">
              Your password must be at least 8 characters
            </span>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-5 w-full cursor-pointer rounded-lg bg-white py-3 font-semibold text-black transition-colors duration-200 hover:bg-gray-300"
          >
            Sign Up
          </button>
          <p className="mt-3 text-center text-sm text-gray-400">{message}</p>
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="cursor-pointer font-semibold text-white underline underline-offset-4 transition-colors hover:text-gray-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
