import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <header className="md:max-w-[65vw] m-auto h-[60vh]  md:h-[90vh] text-center flex flex-col justify-center items-center">
        <h1 className="font-Alkatra font-bold text-4xl md:text-5xl m-4 tracking-wider">
          Hi, I`m Ionut!
        </h1>
        <p className="text-lg md:text-xl sm:max-w-[45vw]">
          <span className="font-semibold">Student</span> from Romania.
          <br />
          I'm passionate about back-end technologies and designing and managing
          linux server.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis nisi provident expedita, impedit consectetur delectus magni
          in, sed dolor.
        </p>
      </header>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
