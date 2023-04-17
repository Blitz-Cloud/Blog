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

export const Head = () => (
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2702945689260159"
    crossorigin="anonymous"
  ></script>
);

export default Layout;
