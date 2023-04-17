import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data }) => {
  const nodes = data.allMdx.nodes;

  return (
    <Layout>
      <div className="min-h-[100vh] bg-slate-100  dark:bg-[#0d2739] dark:text-white ">
        <main className="m-auto px-4 pt-6 lg:max-w-[65vw] lg:px-0">
          <h1 className="mb-8 mt-12 text-6xl font-bold">Blog</h1>
          <div className="grid gap-4 py-4 text-2xl font-semibold md:grid-cols-2">
            {nodes.map((node, index) => {
              if (!(index % 2)) {
                return (
                  <Link
                    to={"/blog/" + node.frontmatter.slug}
                    className="min-h-[180px] rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-8   text-white transition-transform  duration-300 ease-in-out hover:-translate-y-1.5 md:px-8"
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
                    className="min-h-[180px] rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-8 text-white transition-transform  duration-300 ease-in-out hover:-translate-y-1.5 md:px-8"
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
    </Layout>
  );
};

export const Head = () => <Seo title="Blog" />;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
  }
`;

export default BlogPost;
