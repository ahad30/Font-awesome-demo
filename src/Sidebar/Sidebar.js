import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        {/* <Colors handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;
