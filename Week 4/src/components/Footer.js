import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p>Questions? Call 000-800-919-1694</p>
      <div className="footer-grid">
        <div><a href="#">FAQ</a></div>
        <div><a href="#">Help Center</a></div>
        <div><a href="#">Account</a></div>
        <div><a href="#">Media Centre</a></div>
        <div><a href="#">Investor Relations</a></div>
        <div><a href="#">Jobs</a></div>
        <div><a href="#">Ways to Watch</a></div>
        <div><a href="#">Terms of Use</a></div>
      </div>
      <select className="language-select-footer">
        <option>English</option>
        <option>हिन्दी</option>
      </select>
      <p>Netflix India</p>
    </footer>
  );
}

export default Footer;
