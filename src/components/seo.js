import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <title>
      {data.site.siteMetadata.title} | {title}
    </title>
  );
};

export default Seo;
