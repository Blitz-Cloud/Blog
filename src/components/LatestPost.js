import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const LatestPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 1) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            slug
          }
        }
      }
    }
  `);

  return (
    <div className="bg-slate-100 dark:bg-[#0d2739] dark:text-white ">
      <main className="m-auto px-4 pt-12 md:px-16 lg:max-w-[80vw]">
        <div className="my-3 inline-block rounded-full bg-primary px-3 py-1 uppercase text-[#f5f5f5] ">
          Latest Post
        </div>
        <div>
          <h2 className="text-lg font-bold md:text-4xl">
            {data.allMdx.nodes[0].frontmatter.title}
          </h2>
          <p className="my-4 text-base md:text-lg">
            {data.allMdx.nodes[0].frontmatter.description}
          </p>
          <p className="my-4 text-base font-normal">
            {data.allMdx.nodes[0].frontmatter.date}
          </p>
          <Link
            to={"/blog/" + data.allMdx.nodes[0].frontmatter.slug}
            className="inline-flex items-center rounded-md bg-[#0aa9ff]  fill-white px-3 py-1 text-base tracking-wider text-white dark:bg-[#feffbe] dark:fill-black dark:text-black md:text-lg"
          >
            Read more
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
    </div>
  );
};

export default LatestPost;
