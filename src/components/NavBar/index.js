import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/more-info">How it works</Link>
        </li>
        <li>
          <span>
            <Link to="/registry">Registry</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}
