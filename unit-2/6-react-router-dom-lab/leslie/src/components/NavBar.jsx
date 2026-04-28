import React from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/mailboxes">
              Mailboxes
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => (navData.isActive ? styles.active : "")} to="/new-mailbox">
              New Mailbox
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
