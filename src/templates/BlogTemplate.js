import { graphql } from "gatsby";
import React from "react";
import { Helmet } from 'react-helmet';

import Layout from "../components/Layout";

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter ,html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>Piero's Blog | {frontmatter.title}</title>
      <meta name="author" content="Piero Narciso Ancalle" />
        <meta name="description" content={frontmatter.description}/>
        <meta name="keywords" content={frontmatter.keywords} />
      </Helmet>
      <div>
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {frontmatter.title}
        </h1>
        <hr className="mt-4 border-t-2 w-20 mx-auto" />
        <span className="text-sm text-center text-gray-600 tracking-wide font-medium w-full block">
          {frontmatter.date}
        </span>
        <div
          className="prose prose-blue lg:prose-lg mt-3 mx-auto mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        keywords
        description
        title
      }
    }
  }
`;
