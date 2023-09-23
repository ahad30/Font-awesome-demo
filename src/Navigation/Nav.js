import React, { useState } from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket , faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const Nav = ({ handleInputChange, query }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => {
  //   setIsOpen(!isOpen);
  // };


  return (
    <>
    <nav>
      <div className="profile-container">
      <a href="">
          <span className="nav-icons"><FontAwesomeIcon icon={faFlag} size="2x" /></span>
        </a>
      <a href="">
          <span className="nav-icons">Start</span>
        </a>
        <a href="">
          <span className="nav-icons">  <FontAwesomeIcon  icon={faMagnifyingGlass} size="1x" className="" /> </span>
        </a>
        <a href="">
          <span className="nav-icons">Icons</span>
        </a>
        <a href="">
          <span className="nav-icons">Docs</span>
        </a>
        <a href="">
          <span className="nav-icons">Plan</span>
        </a>
        <a href="">
          <span className="nav-icons">Support</span>
        </a>
        <a href="">
          <span className="nav-icons">Podcast</span>
        </a>
        <a href="">
          <span className="nav-icons-last"><FontAwesomeIcon icon={faRightFromBracket}  /></span>
        </a>
      </div>
    </nav>
    <div className="wrapper">
    <div className="searchBar ">
    <input
      className="search-input"
      type="text"
      onChange={handleInputChange}
      value={query}
      placeholder="Search 26000 icons..                                                                                                                                 Powered By Algolia"
    />
  </div>
  </div>
  </>
  );
};

export default Nav;
