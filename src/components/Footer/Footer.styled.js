import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  min-height: 22rem;
  background-color: var(--bg-font-black);
  color: var(--bg-font-white);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  & .addressFooter h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  & .addressFooter div {
    width: 5rem;
    border-bottom: 0.5rem solid;
    margin-bottom: 1.5rem;
  }

  & .addressFooter li {
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
  }

  & .buttonsFooter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .buttonsFooter p {
    font-size: 1.2rem;
  }

  & .buttonsFooter button {
    width: 20rem;
    /*padding: 1.6rem;*/
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.5rem;
    border-radius: 0.5rem;
    background-color: var(--bg-font-white);
    font-weight: 800;
    cursor: pointer;
  }

  & .buttonsFooter button:last-child {
    margin-bottom: 0;
  }

  & .buttonsFooter button img {
    margin-right: 1.5rem;
  }

  & .buttonsFooter button:last-child {
    & img {
      margin-left: 1.8rem;
      margin-right: 0;
    }
  }

  & .LogosFooter {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & .LogosFooter div {
    margin-right: 2.5rem;
  }

  & .LogosFooter div:last-child {
    margin-right: 0;
  }

  & .LogosFooter p {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  & .LogosFooter img {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    padding: 3rem 0;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    & .addressFooter {
      margin-bottom: 3rem;
    }
    & .LogosFooter {
      margin-top: 3rem;
    }
  }
`;
