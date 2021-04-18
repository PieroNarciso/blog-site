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
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          description
          title
        }
        id
      }
    }
  }
`;

export default Home;
