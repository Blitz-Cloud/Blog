import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostsGrid from "../components/PostsGrid";
import LatestPost from "../components/LatestPost";

const IndexPage = () => {
  return (
    <Layout>
      <div className="dark:bg-primary dark:text-white text-center">
        <header className="h-[60vh] md:h-[95vh] p-4 m-auto sm:max-w-[50vw] flex flex-col justify-center items-center">
          <h1 className="font-Alkatra font-bold text-5xl md:text-6xl my-6 tracking-wider">
            Hi, I`m Ionut!
          </h1>
          <div className="text-xl">
            <p>
              <span className="font-semibold">Student</span> from Romania.
            </p>
            <p className="m-auto sm:max-w-[90%]">
              I'm passionate about back-end technologies and designing and
              managing linux server.
            </p>
            <p className="my-3 m-auto sm:max-w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nisi provident expedita.
            </p>
          </div>
        </header>
      </div>
      <LatestPost />
      <PostsGrid />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
