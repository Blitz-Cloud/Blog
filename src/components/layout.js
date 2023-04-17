import * as React from "react";
import Navbar from "./navbar";
import Seo from "./seo";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* footer */}
    </div>
  );
};

export const Head = ({ title }) => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2702945689260159"
        crossorigin="anonymous"
      ></script>
      <Seo title={title} />
    </>
  );
};

export default Layout;
