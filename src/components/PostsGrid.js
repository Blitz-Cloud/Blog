import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

const PostsGrid = ({ posts }) => {
  return (
    <div className="m-auto px-4 pt-6 md:px-16 lg:max-w-[80vw]">
      {/* post grid */}
      <div className="grid gap-4 py-4 text-2xl font-semibold md:grid-cols-2 ">
        {posts.map((post, index) => {
          if (!(index % 2)) {
            return (
              <Link
                to={"/blog/" + post.frontmatter.slug}
                className="rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-12 text-xl font-semibold text-white  transition-transform duration-300 ease-in-out hover:-translate-y-1.5 md:px-16"
              >
                {post.frontmatter.title}
                <p className="text-base font-normal">{post.frontmatter.date}</p>
              </Link>
            );
          } else {
            return (
              <Link
                to={"/blog/" + post.frontmatter.slug}
                className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-12 text-xl font-semibold text-white transition-transform duration-300 ease-in-out hover:-translate-y-1.5 md:px-16"
              >
                {post.frontmatter.title}
                <p className="text-base font-normal">{post.frontmatter.date}</p>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PostsGrid;
