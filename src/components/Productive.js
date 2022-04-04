import React from "react";
import {
  ImageContainer,
  ProductiveContainer,
  TextContainer,
} from "../styles/ProductiveStyles";

function Productive() {
  return (
    <ProductiveContainer>
      <ImageContainer>
        <img
          src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/main/src/assets/img/illustration-stay-productive.png"
          alt="Productivity-Icon"
        ></img>
      </ImageContainer>
      <TextContainer>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#?">See how Fylo works</a>
      </TextContainer>
    </ProductiveContainer>
  );
}

export default Productive;
