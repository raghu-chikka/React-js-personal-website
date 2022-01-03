import React, { useState } from "react";
import "./Header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <a href="#">Raghu Varma</a>
      </div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(true)}>
            <img
              className="menu-icon"
              src="https://img.icons8.com/fluency-systems-regular/48/000000/apps.png"
            />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
