import styled from "styled-components";

export const ContainerNewsletter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 4rem 0;
  background-color: var(--bg-newsletter);

  & .newsletterTitle h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--input-placeholder);
  }

  & .newsletterForm {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .newsletterForm input {
    background-color: var(--bg-font-white);
    width: 28rem;
    height: 4.8rem;
    outline: none;
    margin-right: 1rem;
    padding-left: 1.5rem;
    color: var(--input-placeholder);
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 0.5rem;
  }

  & .newsletterForm input:focus {
    border: 0.2rem solid var(--border-solds);
  }

  & #msgInputName,
  & #msgInputEmail {
    color: #ff0000;
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  & .newsletterForm button {
    background-color: var(--bg-font-black);
    width: 14rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    color: var(--bg-font-white);
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
  }
  @media (max-width: 820px) {
    & .newsletterForm {
      flex-direction: column;
    }
    & .newsletterForm input {
      margin-bottom: 2rem;
      width: 28rem;
      margin-right: 0;
    }
    & .newsletterForm button {
      width: 15rem;
    }

    & #msgInputName,
    & #msgInputEmail {
      margin-top: -1rem;
      text-align: center;
      margin-bottom: 0.8rem;
    }
  }
  @media (max-width: 550px) {
    & .newsletterTitle h2 {
      text-align: center;
      margin-left: 1rem;
    }
  }
`;
