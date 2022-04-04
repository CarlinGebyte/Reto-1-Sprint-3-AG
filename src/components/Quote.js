import React from "react";
import {
  Card,
  CardsContainer,
  ImageContainer,
  TestimonialP,
} from "../styles/QuoteStyles";

function Quote() {
  return (
    <CardsContainer>
      <Card>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <TestimonialP>
          <ImageContainer>
            <img
              src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/main/src/assets/img/profile-1.jpg"
              alt="Satish"
            ></img>
          </ImageContainer>
          <div>
            <h4>Satish Patel</h4>
            <p>Founder & CEO, Huddle</p>
          </div>
        </TestimonialP>
      </Card>
      <Card>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <TestimonialP>
          <ImageContainer>
            <img
              src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/main/src/assets/img/profile-2.jpg"
              alt="Satish"
            ></img>
          </ImageContainer>
          <div>
            <h4>Satish Patel</h4>
            <p>Founder & CEO, Huddle</p>
          </div>
        </TestimonialP>
      </Card>
      <Card>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <TestimonialP>
          <ImageContainer>
            <img
              src="https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/main/src/assets/img/profile-3.jpg"
              alt="Satish"
            ></img>
          </ImageContainer>
          <div>
            <h4>Satish Patel</h4>
            <p>Founder & CEO, Huddle</p>
          </div>
        </TestimonialP>
      </Card>
    </CardsContainer>
  );
}

export default Quote;
