import React from "react";
import "./header.css";
import CTA from "./CTA";
import myPhoto from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Gennady Raster</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={myPhoto} alt="me" />
        </div>
        <div className="scroll__down">
          <div className="arrow__down">
            <BsArrowDown />
          </div>
          <a href="#contact">Scroll Down</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
