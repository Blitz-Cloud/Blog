import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostsGrid from "../components/PostsGrid";
import LatestPost from "../components/LatestPost";
import {useStaticQuery, graphql} from "gatsby"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
      query LatestPosts {
        allMdx(sort: { frontmatter: { date: DESC } }, limit: 4, skip: 1) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              slug
            }
          }
        }
      }
    `);
    const posts = data.allMdx.nodes;
    console.log(posts)
  return (
    <Layout title="Home Page">
      <div className="text-center dark:bg-primary dark:text-white">
        <header className="m-auto flex h-[60vh] flex-col items-center justify-center p-4 sm:max-w-[50vw] md:h-[95vh]">
          <h1 className="my-6 font-Alkatra text-5xl font-bold tracking-wider md:text-6xl">
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
            <p className="mx-auto my-3 sm:max-w-[85%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis nisi provident expedita.
            </p>
          </div>
        </header>
      </div>
      <LatestPost />
      <PostsGrid posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
