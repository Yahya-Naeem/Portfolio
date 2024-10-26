import React, { useState } from 'react';
import './navbarStyle.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          Yahya
        </div>

        <div className="nav-menu">
          <div id="webapp_cover">
            <div id="menu_button">
              <input type="checkbox" id="menu_checkbox" onChange={toggleMenu} />
              <label htmlFor="menu_checkbox" id="menu_label">
                <div id="menu_text_bar"></div>
              </label>
            </div>
          </div>

          <div className={`nav-item-container ${isMenuOpen ? 'open' : ''}`}>
            <div className="nav-items">About</div>
            <div className="nav-items">Experience</div>
            <div className="nav-items">Education</div>
            <div className="nav-items">Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}