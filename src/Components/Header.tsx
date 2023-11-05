import React from "react";
import s from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={s.nav}>
      <a className={s.logo}>
        <img src="./svg/headerLogo.svg" alt="eventmaker" />
      </a>
      <ul>
        <li>
          <a>Categories</a>
        </li>
        <li>
          <a>Event types</a>
        </li>
        <li>
          <a>Examples</a>
        </li>
        <li>
          <a>How it works</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
        <li>
          <a>For suppliers</a>
        </li>
      </ul>
      <button className={s.button}>
        Get started
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              d="M1 9L5 5L1 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </header>
  );
};

export default Header;
