import React from "react";
import { Link } from "gatsby";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between px-3 py-4 items-center bg-primary shadow-lg fixed top-0 w-full z-10">
      <Link className="text-xl text-gray-100 font-semibold" to="/">
        Piero's Blog
      </Link>
      <div>
        <a
          className="px-2 py-2 rounded bg-primary-dark text-white font-medium tracking-wide hover:bg-primary-darker"
          href="https://dev.pieronarciso.com"
          rel="noreferrer"
          target="_blank"
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
