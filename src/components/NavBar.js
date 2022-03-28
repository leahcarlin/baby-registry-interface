import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/">Home</Link>
      {"-"}
      <Link to="/more-info">How it works</Link>
      {"-"}
      <Link to="/registry">Registry</Link>
    </div>
  );
}
