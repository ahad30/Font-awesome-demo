import React from "react";
import Style from "./Style/Style";
import Version from "./Version/Version";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <Style handleChange={handleChange} />
        <Version handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
