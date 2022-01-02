import React from "react";
import {} from "./NavTabs.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav
      style={{ marginBottom: "2rem" }}
      class="navbar navbar-expand-lg navbar-light"
    >
      <a
        class=" navbar-brand navbarName"
        href="#aboutme"
        onClick={() => handlePageChange("AboutMe")}
      >
        Daniel Roubin
      </a>
      <div class="row">
        <ul className="navbar-nav">
          <li style={{ fontSize: "large" }} className="nav-item ">
            <a
              href="#aboutme"
              onClick={() => handlePageChange("AboutMe")}
              style={{color: "#251E13"}}
              // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li style={{ fontSize: "large" }} className="nav-item ">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              style={{color: "#251E13"}}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li style={{ fontSize: "large" }} className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              style={{color: "#251E13"}}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li style={{ fontSize: "large" }} className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              style={{color: "#251E13"}}
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
