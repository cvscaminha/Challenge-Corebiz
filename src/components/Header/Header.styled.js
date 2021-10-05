import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;

  img {
    cursor: pointer;
  }

  & .userInput {
    justify-content: space-between;
    align-items: center;
    min-width: 40%;
    max-width: 71rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid var(--user-border-pdtinfo-gray);
  }

  @media (max-width: 800px) {
    flex-direction: column;
    & .userInput {
      min-width: 70%;
    }
  }
`;

export const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 100%;
    outline: none;
    height: 2.3rem;
    font-weight: 400;
    font-size: 1.3rem;
  }

  img {
    cursor: pointer;
  }

  & .imgHeader {
    margin-left: 2rem;
  }

  & .cartItems {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--cart-ellipse-red);
    color: var(--bg-font-white);
    border-radius: 100%;
    width: 1.8rem;
    height: 1.8rem;
  }

  @media (max-width: 800px) {
    margin-top: 2rem;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: 1.3rem;
  margin-left: 0.6rem;
  cursor: pointer;
`;
