import * as React from "react";
import { Link } from "gatsby";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <nav className="md:max-w-[65vw] m-auto p-3 flex flex-row justify-between items-center   text-lg md:text-xl ">
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
  );
};
export default Navbar;
