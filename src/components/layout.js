import * as React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="text-white">
      <Navbar />
      {children}
      {/* footer */}
    </div>
  );
};

export default Layout;
