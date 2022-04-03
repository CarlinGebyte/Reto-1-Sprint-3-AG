import React from "react";
import { HeaderContainer } from "../styles/StyledHeader";

function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src="" alt="logo"></img>
      </div>
      <div>
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
