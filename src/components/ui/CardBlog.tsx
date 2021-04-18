import React from "react";
import { Link } from "gatsby";

interface CardBlogProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  className?: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  title,
  path,
  description,
  keywords,
  className,
}) => {
  return (
    <div className={"bg-white rounded-lg overflow-hidden shadow" + " " + className}>
      <div className="bg-primary-gray px-2 py-2">
        <h1 className="text-white text-lg font-medium tracking-wider">
          {title}
        </h1>
      </div>
      <div className="bg-primary-light px-2 pb-3 pt-2">
        <p>{description}</p>
        <div>
          <div>
            {keywords?.map((keyword, id) => (
              <div key={id}>{keyword}</div>
            ))}
          </div>
          <div className="flex flex-row-reverse">
            <Link className="bg-primary-dark px-2 py-1 rounded text-white font-medium" to={path}>Go to blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
