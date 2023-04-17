import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const PostsGrid = () => {
  // the post grid should accept a prop

  const data = useStaticQuery(graphql`
    query LatestPosts {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 4) {
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
  const nodes = data.allMdx.nodes;

  return (
    <div className="bg-slate-100 dark:bg-[#0d2739] dark:text-white">
      <main className="m-auto px-4 pt-6 md:px-16 lg:max-w-[80vw]">
        {/* Section header */}
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
        {/* post grid */}
        <div className="grid gap-4 py-4 md:grid-cols-2">
          {nodes.map((node, index) => {
            if (index === 0) {
              return;
            }
            if (index % 2) {
              return (
                <Link
                  to={"/blog/" + node.frontmatter.slug}
                  className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-12 text-xl font-semibold text-white  transition-transform duration-300 ease-in-out hover:-translate-y-1.5 md:px-16"
                >
                  {node.frontmatter.title}
                  <p className="text-base font-normal">
                    {node.frontmatter.date}
                  </p>
                </Link>
              );
            } else {
              return (
                <Link
                  to={"/blog/" + node.frontmatter.slug}
                  className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-12 text-xl font-semibold text-white transition-transform duration-300 ease-in-out hover:-translate-y-1.5 md:px-16"
                >
                  {node.frontmatter.title}
                  <p className="text-base font-normal">
                    {node.frontmatter.date}
                  </p>
                </Link>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default PostsGrid;
