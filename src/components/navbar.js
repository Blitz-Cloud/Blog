import * as React from "react";
import { Link } from "gatsby";


const Navbar = () => {
  return (
    <nav className="max-w-[65vw] m-auto text-white flex flex-row justify-between  text-xl">
      <Link to="/" className="m-3 uppercase font-Alkatra ">
        Ionut
      </Link>
      <div className="m-3">
        <Link className="ml-6  hover:underline " to="/about">
          About
        </Link>
        <Link className="ml-6  hover:underline " to="/about">
          Blog
        </Link>
        <Link className="ml-6  hover:underline " to="/about">
          Projects
        </Link>
        {/* fix svg issue */}
        {/* <img className="inline rounded-full hover:bg-white " src={dark} alt="" /> */}
      </div>
    </nav>
  );
};
export default Navbar;
