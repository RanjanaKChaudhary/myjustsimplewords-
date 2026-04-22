import {
  FaFacebook,
  FaInstagram,
  FaHome,
  FaPen,
  FaUpload,
  FaBookOpen,
  FaFeatherAlt,
  FaBook,
  FaInfoCircle,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function LeftSection() {
  return (
    <div className="w-64 sticky top-0 min-h-screen bg-slate-900 text-white p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-6">
          <h1 className="text-center leading-tight mb-5">
            <span
              className="block text-2xl md:text-3xl font-semibold text-cyan-400 tracking-wide"
              style={{ fontFamily: "cursive" }}
            >
              myjust
            </span>

            <span
              className="block text-3xl md:text-3xl font-extrabold text-orange-400 tracking-wide"
              style={{ fontFamily: "cursive" }}
            >
              simplewords
            </span>
          </h1>
        </div>

        <p className="text-md underline mb-5 text-gray-300 mt-5 ">
          "Simple words can <br /> inspire powerful thoughts"
        </p>

        {/* Navigation */}
        <nav className="pt-5 mb-5">
          <ul className="space-y-5">
            <li>
              <NavLink
                to="/"
                className="flex items-center gap-3 mb-3 hover:text-yellow-400 transition"
              >
                <FaHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/all-writings"
                className="flex items-center gap-3 mb-3 hover:text-yellow-400 transition"
              >
                <FaBook />
                All Writings
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/quotes"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                <FaPen /> Quotes
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/poems"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                <FaBookOpen /> Poems
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shayari"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                <FaFeatherAlt /> Shayari
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/upload-quote"
                className="flex items-center gap-3 hover:text-yellow-400"
              >
                <FaUpload /> Post Your Writings
              </NavLink>
            </li>

             <li>
              <NavLink
                to="/about"
                className="flex items-center gap-3 mb-3 hover:text-yellow-400 transition"
              >
                < FaInfoCircle/> About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-5">
        <div className="flex gap-4 text-xl justify-center">
          <FaFacebook
            onClick={() =>
              window.open(
                "https://www.facebook.com/share/1CT5tVAXid/",
                "_blank",
              )
            }
            className="cursor-pointer hover:text-blue-500 hover:scale-110 transition"
          />

          <FaInstagram
            onClick={() =>
              window.open(
                "https://www.instagram.com/myjustsimplewords?igsh=MTAzc2tvNGZ4d2trdg==",
                "_blank",
              )
            }
            className="cursor-pointer hover:text-pink-500 hover:scale-110 transition"
          />
        </div>

        <p className="text-xs mt-2 text-gray-400 text-center pt-3">
          © 2026 MyJustSimpleWords.
          <br /> All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LeftSection;
