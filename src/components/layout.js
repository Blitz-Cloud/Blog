import * as React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="theme" id="body">
      <Navbar />
      {/* {children} */}
      {/* footer */}
    </div>
  );
};

export default Layout;
