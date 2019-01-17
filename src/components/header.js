import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
  </nav>
);

export default Header;
