import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">CISC275</div>
      <ul className="navbar-menu">
        <Button>
          <Link to="/">Home</Link>
        </Button>
        <Button>
          <Link to="/BasicPage">Basic Page</Link>
        </Button>
        <Button>
          <Link to="/BasicPage">Basic Page</Link>
        </Button>
      </ul>
    </div>
  );
}

export default Navbar;
