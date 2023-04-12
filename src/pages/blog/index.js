import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data }) => {
  const nodes = data.allMdx.nodes;

  return (
    <Layout>
      <div className="dark:bg-[#0d2739] min-h-[100vh] dark:text-white bg-slate-100 ">
        <main className="m-auto lg:max-w-[65vw] pt-6 px-4 lg:px-0">
          <h1 className="mt-12 mb-8 font-bold text-6xl">Blog</h1>
          <div className="py-4 font-semibold text-2xl grid md:grid-cols-2 gap-4">
            {nodes.map((node, index) => {
              if (!(index % 2)) {
                return (
                  <Link
                    to={"/blog/" + node.frontmatter.slug}
                    className="py-6 min-h-[180px] px-4 md:px-8 bg-gradient-to-r from-indigo-500 to-purple-500   text-white rounded-md  transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
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
                    className="py-6 min-h-[180px] px-4 md:px-8 bg-gradient-to-r  from-purple-500 to-pink-500 text-white rounded-md  transition-transform duration-300 ease-in-out hover:-translate-y-1.5"
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
