import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-24 p-3">
      <h1>VizeCV</h1>
      <ul>
        <li>
          <a>How it works</a>
        </li>
        <li>
          <a>Features</a>
        </li>
        <li>
          <a>Help</a>
        </li>
      </ul>
      <Link to="dashboard">Create Now</Link>
    </div>
  );
}

export default Header;
