import * as React from "react";
import { Link } from "gatsby";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="dark:bg-primary dark:text-white bg-white  top-0 sticky ">
      <nav className="md:max-w-[65vw] m-auto p-3 text-lg md:text-xl flex flex-row justify-between items-center   ">
        <Link to="/" className="uppercase">
          Ionut
        </Link>
        <div className="flex justify-center items-center">
          <Link className="mx-3 " to="/about">
            About
          </Link>

          <Link className="mx-3 " to="/about">
            Projects
          </Link>
          <ThemeToggler />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
