import { useState } from "react";
import logoCine from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative font-display flex bg-[#1E1E1E]/30 backdrop-blur-md z-50  justify-between items-center  text-white p-4">
      <a href="#">
        <img src={logoCine} alt="cineExplora logo" />
      </a>
      <div className="flex">
        {/* navegador para desktop */}
        <nav className="hidden sm:flex">
          <ul className="flex gap-4 ">
            <li>
              <Link
                to={"/"}
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/favorites"}
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                Favoritos
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                <i className="ri-github-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                <i className="ri-mail-fill"></i>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>
      {/* navegador para desktop */}
      {open && (
        <nav className="absolute p-4 left-0 bg-[#1E1E1E] text-2xl backdrop-blur-md z-50 top-full w-full flex items-center justify-between  sm:hidden">
          <ul className="flex flex-col w-full justify-center items-center gap-10">
            <li>
              <Link
                to={"/"}
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/favorites"}
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                Favoritos
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                Github
                <i className="ri-github-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                LinkedIn
                <i className="ri-linkedin-box-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-1 hover:text-[#FFB4AA] transition-colors duration-500"
              >
                Email
                <i className="ri-mail-fill"></i>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
