import React from "react";
import { Link } from "react-router-dom";

export default function Footerindex() {
  return (
    <footer className="mt-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-black">A</span>
                </div>

                <div>
                  <h2 className="text-2xl font-black tracking-wider">ARIA</h2>
                  <p className="text-[10px] tracking-[0.35em] text-gray-400 font-bold">
                    WEBSITE
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-gray-400 mt-6 max-w-md leading-7">
              A personal website built with React, Tailwind CSS and modern
              frontend technologies.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-3">
              <span className="text-amber-400 text-xl">★</span>

              <div>
                <p className="text-sm font-bold">Website Rating</p>
                <p className="text-xs text-gray-400">9.7 / 10</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <Link
                to="/"
                className="hover:text-amber-400 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/artc"
                className="hover:text-amber-400 transition duration-300"
              >
                Article
              </Link>

              <Link
                to="/about"
                className="hover:text-amber-400 transition duration-300"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Contact</h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <p>
                <span className="text-white font-semibold">Email</span>
                <br />
                ariaesmaeilian@gmail.com
              </p>

              <p>
                <span className="text-white font-semibold">Phone</span>
                <br />
                +98 913 416 8922
              </p>

              <p>
                <span className="text-white font-semibold">Address</span>
                <br />
                Esfahan, Molsadra Alley 16
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
          <p>© 2026 ARIA Website. All rights reserved.</p>

          <p>
            Built with <span className="text-amber-400">React</span> &{" "}
            <span className="text-amber-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
