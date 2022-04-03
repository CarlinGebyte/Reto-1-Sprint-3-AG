import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 20px 5%;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    li {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        padding: 1rem;
        transition: all 0.3s ease-in-out;
        &:last-child {
          padding-right: 0;
        }
        &:hover {
          color: #000;
        }
      }
    }
  }
`;
