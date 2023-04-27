import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import PostsGrid from "../../components/PostsGrid";

const BlogPost = ({ data }) => {
  const nodes = data.allMdx.nodes;

  return (
    <Layout>
      <div className="min-h-[100vh] bg-slate-100  dark:bg-[#0d2739] dark:text-white ">
        <main className="m-auto px-4 pt-6 lg:max-w-[65vw] lg:px-0">
          <h1 className="mb-8 mt-12 text-6xl font-bold">Blog</h1>
          {/* text-2xl font-semibold */}
          <PostsGrid posts={nodes} />
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
