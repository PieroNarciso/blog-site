import React from "react";
import { Link } from 'gatsby';

interface CardBlogProps {
  title: string;
  content?: string;
  keywords?: string[];
  path: string;
}

const CardBlog: React.FC<CardBlogProps> = ({ title, path }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {/* <p>{content}</p> */}
        <div>
          {/* <div> */}
          {/*   {keywords.map((keyword, id) => ( */}
          {/*     <div key={id}>{keyword}</div> */}
          {/*   ))} */}
          {/* </div> */}
          <Link to={path}>Go to blog</Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;

