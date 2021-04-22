import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import CardBlog from "../components/ui/CardBlog";

interface HomeProps {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          date: string;
          slug: string;
          keywords: string;
          description: string;
          title: string;
        };
        id: string;
      }[];
    };
  };
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>Piero's Blog</title>
        <meta name="author" content="Piero Narciso Ancalle" />
        <meta
          name="description"
          content="Este es un blog creado por Piero Narciso Ancalle para escribir sobre tecnologías, programación, frameworks de desarrollo web, entre otros."
        />
        <meta name="keywords" content="linux,vim,blog,vue,react" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 mx-3 lg:grid-cols-2 justify-items-center max-w-2xl xl:max-w-5xl md:mx-auto">
        {projects.map((project) => (
          <CardBlog
            title={project.frontmatter.title}
            key={project.id}
            path={project.frontmatter.slug}
            description={project.frontmatter.description}
            className="col-span-1 w-full max-w-md xl:max-w-lg"
          ></CardBlog>
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Projects {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          slug
          title
          description
        }
      }
    }
  }
`;

export default Home;
