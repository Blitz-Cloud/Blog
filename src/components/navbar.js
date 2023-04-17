import * as React from "react";
import { Link } from "gatsby";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white dark:bg-primary dark:text-white">
      <nav className="m-auto flex flex-row items-center justify-between p-3 text-lg md:max-w-[65vw] md:text-xl">
        <Link to="/" className="uppercase">
          Ionut
        </Link>
        <div className="flex items-center justify-center">
          <Link className="mx-3 " to="/about">
            About
          </Link>

          <Link className="mx-3 " to="/blog">
            Blog
          </Link>
          <ThemeToggler />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
