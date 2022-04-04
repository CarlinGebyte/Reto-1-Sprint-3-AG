import React from "react";
import { Button } from "../styles/Button";
import {
  DescriptionContainer,
  DescriptionText,
} from "../styles/DescriptionStyles";

function Description() {
  return (
    <DescriptionContainer>
      <img
        src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/main/src/assets/img/illustration-intro.png"
        alt="Intro"
      ></img>
      <DescriptionText>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <Button>Get Started</Button>
      </DescriptionText>
    </DescriptionContainer>
  );
}

export default Description;
