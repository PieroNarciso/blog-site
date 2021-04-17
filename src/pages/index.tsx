import { graphql } from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import CardBlog from "../components/ui/CardBlog";

interface HomeProps {
  data: {
    allMarkdownRemark: {
      nodes: {
        frontmatter: {
          date: string;
          slug: string;
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
      {projects.map((project) => (
        <CardBlog
          title={project.frontmatter.title}
          key={project.id}
          path={project.frontmatter.slug}
        ></CardBlog>
      ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query Projects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        id
      }
    }
  }
`;

export default Home;
