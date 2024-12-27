import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-24  flex justify-evenly items-center">
      <h1 className="text-4xl font-bold">vizeCV</h1>
      <ul className="flex jusce items-center gap-16">
        <li>
          <a className="text-lg font-semibold cursor-pointer hover:text-purple-500">
            How it works
          </a>
        </li>
        <li>
          <a className="text-lg font-semibold cursor-pointer hover:text-purple-500">
            Features
          </a>
        </li>
        <li>
          <a className="text-lg font-semibold cursor-pointer hover:text-purple-500">
            Help
          </a>
        </li>
      </ul>
      <Link
        className="text-lg font-bold cursor-pointer border-2 border-grey-600 py-2 px-4 rounded-full"
        to="dashboard"
      >
        Create Now
      </Link>
    </div>
  );
}

export default Header;
