import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./Header.scss";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="header">
        <h3 className="logo">Jemin.dev</h3>
        <ul>
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#portfolio">Project</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
        <RiMenu3Line
          className="responsive__menu"
          size={20}
          color="black"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        />
      </nav>
      <div
        className="offcanvas offcanvas-top"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel"></h5>
          <IoClose
            type="button"
            size={25}
            color="black"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="responsive__ui">
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="/#home">Home</a>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="/#about">About</a>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="/#portfolio">Project</a>
            </li>
            <li data-bs-dismiss="offcanvas" aria-label="Close">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
