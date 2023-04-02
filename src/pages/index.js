import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <header className="max-w-[65vw] m-auto  h-[90vh] text-center flex flex-col justify-center items-center">
        <h1 className="font-Alkatra font-bold text-6xl m-4">Hi, I`m Ionut!</h1>
        <p className="text-2xl max-w-[35vw]">
          <span className="font-semibold">Student</span> from Romania.
          <br />
          I'm passionate about back-end technologies and designing and managing
          linux server.
        </p>
      </header>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
