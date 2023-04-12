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
    <div className="dark:bg-[#0d2739] dark:text-white bg-slate-100 ">
      <main className="m-auto lg:max-w-[80vw] pt-6 px-4 md:px-16">
        {/* Section header */}
        <div className="flex justify-between">
          <div className="rounded-full my-3 bg-primary inline-block py-1 px-3 uppercase  text-[#f5f5f5]">
            More Posts
          </div>
          <Link
            to="/blog"
            className="text-base md:text-lg py-1 px-3 my-3 text-dark  dark:text-[#f5f5f5] dark:fill-[#f5f5f5] fill-dark tracking-wider inline-flex items-center"
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
        <div className="grid md:grid-cols-2 gap-4 py-4">
          {nodes.map((node, index) => {
            if (index === 0) {
              return;
            }
            if (index % 2) {
              return (
                <Link
                  to={"/blog/" + node.frontmatter.slug}
                  className="font-semibold text-xl bg-gradient-to-r from-indigo-500 to-purple-500   text-white rounded-md py-12 px-4 md:px-16 transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
                >
                  {node.frontmatter.title}
                  <p className="font-normal text-base">
                    {node.frontmatter.date}
                  </p>
                </Link>
              );
            } else {
              return (
                <Link
                  to={"/blog/" + node.frontmatter.slug}
                  className="font-semibold text-xl bg-gradient-to-r  from-purple-500 to-pink-500 text-white rounded-md py-12 px-4 md:px-16 transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
                >
                  {node.frontmatter.title}
                  <p className="font-normal text-base">
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
