import React from "react";

function Header() {
  return (
    <header className="header">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <div className="header-buttons">
        <select className="language-select">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
