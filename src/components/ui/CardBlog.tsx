import React from "react";
import { Link } from "gatsby";

interface CardBlogProps {
  title: string;
  description: string;
  path: string;
  className?: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  title,
  path,
  description,
  className,
}) => {
  return (
    <div className={"bg-white rounded-lg overflow-hidden shadow flex flex-col" + " " + className}>
      <div className="bg-primary-gray px-2 py-1">
        <h1 className="text-white text-lg font-medium tracking-wider">
          {title}
        </h1>
      </div>
      <div className="bg-primary-light px-2 pb-3 pt-2 text-gray-800 flex-grow flex-col flex justify-between">
        <p>{description}</p>
        <div>
          <div>
          </div>
          <div className="flex flex-row-reverse">
            <Link className="bg-primary-dark hover:bg-primary-darker px-2 py-1 rounded text-white font-medium" to={path}>Ir al blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
