import styled from "styled-components";

export const ContainerSucessNews = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
  padding: 4rem 0;
  background-color: var(--bg-newsletter);

  & .SucessNews h2 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  & .SucessNews p {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  & .SucessNews button {
    background-color: var(--bg-font-black);
    width: 20rem;
    height: 4.5rem;
    border-radius: 0.5rem;
    color: var(--bg-font-white);
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
