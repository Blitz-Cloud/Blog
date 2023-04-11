import * as React from "react";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo title="About Me" />;
