import React from "react";
import "./Header.css";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/" className="link">
          <h2>Logo</h2>
        </Link>
        <Link to="/demo1" className="link">
          <Demo1 />
        </Link>
        <Link to="/demo2" className="link">
          <Demo2 />
        </Link>
        <Link to="/checkout" className="link">
          <h2>cart Icon</h2>
        </Link>
      </div>
    </>
  );
}

export default Header;
