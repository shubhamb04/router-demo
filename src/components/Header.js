import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/profile">
        Profile
      </Link>
      <Link className="link" to="/services/">
        Services
      </Link>
    </header>
  );
}

export default Header;
