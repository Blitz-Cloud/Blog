import * as React from "react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* footer */}
    </div>
  );
};

export default Layout;
