import styled from "styled-components";

export const DescriptionContainer = styled.div`
  padding: 20px 5%;
  text-align: center;
  img {
    width: 50%;
  }
  @media (max-width: 768px) {
    img {
      width: 90%;
    }
  }
`;

export const DescriptionText = styled.div`
  width: 50%;
  margin: 0 auto;
  P {
    width: 70%;
    margin: 0 auto 4%;
  }
  @media (max-width: 768px) {
    width: 90%;
    P {
      width: 90%;
      margin: 0 auto 4%;
    }
  }
`;
