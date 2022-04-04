import React from "react";
import { HeaderContainer } from "../styles/StyledHeader";

function Header() {
  return (
    <HeaderContainer>
      <div style={{width:"20%"}}>
        <img width={"100%"}
          src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/cf0c047f5a6abe826366f7de423b7d04b8fa88b6/src/assets/img/logo.svg"
          alt="logo"
        ></img>
      </div>
      <div id="navbar">
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#?">Sign In</a>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}

export default Header;
