import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  console.log(data);
  return (
    <Layout>
      <div className="text-start dark:bg-primary dark:text-white">
        <div className="prose m-auto min-h-[100vh] p-4 dark:prose-invert md:max-w-[50vw] ">
          <img src={data.mdx.frontmatter.cover_image} alt="" srcset="" />
          <h1>{data.mdx.frontmatter.title}</h1>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        cover_image
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
