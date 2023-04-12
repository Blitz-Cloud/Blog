import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const LatestPost = () => {
  const data = useStaticQuery(graphql`
    query LatestPost {
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
    <div className="dark:bg-[#0d2739] dark:text-white bg-slate-100 ">
      <main className="m-auto lg:max-w-[80vw] pt-12 px-4 md:px-16">
        <div className="rounded-full my-3 bg-primary inline-block py-1 px-3 uppercase  text-[#f5f5f5]">
          Latest Post
        </div>
        <div>
          <h2 className="text-lg md:text-4xl font-bold">
            {data.allMdx.nodes[0].frontmatter.title}
          </h2>
          <p className="my-4 text-base md:text-lg">
            {data.allMdx.nodes[0].frontmatter.description}
          </p>
          <p className="my-4 font-normal text-base">
            {data.allMdx.nodes[0].frontmatter.date}
          </p>
          <Link
            to={"/blog/" + data.allMdx.nodes[0].frontmatter.slug}
            className="text-base md:text-lg py-1 px-3 rounded-md dark:bg-[#feffbe] bg-[#0aa9ff] text-white  dark:text-black dark:fill-black fill-white tracking-wider inline-flex items-center"
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
