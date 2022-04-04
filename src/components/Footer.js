import React from "react";
import {
  Description,
  DescriptionFooter,
  Email,
  FooterContainer,
  FooterSocial,
  ListFooter,
  Logo,
  LogoContainer,
  NumEmail,
} from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <Description>
        <LogoContainer>
          <Logo
            src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/cf0c047f5a6abe826366f7de423b7d04b8fa88b6/src/assets/img/logo.svg"
            alt="logo"
          ></Logo>
        </LogoContainer>
        <DescriptionFooter>
          <img
            src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/9ff7bee2084bd773939d87b43b8db0a11d772e07/src/assets/img/icon-location.svg"
            alt="Location"
          ></img>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DescriptionFooter>
      </Description>
      <NumEmail>
        <div>
          <span>
            <Email
              src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/9ff7bee2084bd773939d87b43b8db0a11d772e07/src/assets/img/icon-phone.svg"
              alt="Teléfono"
            ></Email>
          </span>
          <p>+1-543-123-4567</p>
        </div>
        <div>
          <span>
            <Email
              src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/9ff7bee2084bd773939d87b43b8db0a11d772e07/src/assets/img/icon-email.svg"
              alt="Teléfono"
            ></Email>
          </span>
          <p>example@filo.com</p>
        </div>
      </NumEmail>
      <ListFooter>
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </ListFooter>
      <ListFooter>
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </ListFooter>
      <FooterSocial>
        <ul>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </ul>
      </FooterSocial>
    </FooterContainer>
  );
}

export default Footer;
