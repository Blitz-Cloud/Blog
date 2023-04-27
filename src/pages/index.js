import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PostsGrid from "../components/PostsGrid";
import LatestPost from "../components/LatestPost";
import { useStaticQuery, graphql, Link } from "gatsby";

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

  return (
    <Layout title="Home Page">
      <div className="dark:bg-primary dark:text-white">
        <header className="m-auto flex h-[60vh] flex-col items-center justify-center p-4 text-center sm:max-w-[50vw] md:h-[95vh]">
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

        <div className="bg-slate-100 dark:bg-[#0d2739] dark:text-white">
          <LatestPost />
          <main className="m-auto px-4 pt-6 md:px-16 lg:max-w-[80vw]">
            <div className="flex justify-between">
              <div className="my-3 inline-block rounded-full bg-primary px-3 py-1 uppercase text-[#f5f5f5]">
                More Posts
              </div>
              <Link
                to="/blog"
                className="text-dark fill-dark my-3  inline-flex items-center px-3 py-1 text-base tracking-wider dark:fill-[#f5f5f5] dark:text-[#f5f5f5] md:text-lg"
              >
                See all
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 96 960 960"
                  width="24"
                  className="ml-2 inline-block"
                >
                  <path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z" />
                </svg>
              </Link>
            </div>
          </main>

          <PostsGrid posts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Home Page" />;
