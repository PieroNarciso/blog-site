import React from "react";
import { Link } from "gatsby";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between px-3 py-4 items-center bg-gray-400">
      <Link className="text-xl" to="/">Piero's Blog</Link>
      <div>
        <a className="px-2 py-1 rounded" href="https://dev.pieronarciso.xyz" target="_blank">
          Portafolio
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
