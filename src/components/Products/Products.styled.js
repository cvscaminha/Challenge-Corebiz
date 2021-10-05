import styled from "styled-components";

export const ContainerProducts = styled.section`
  /*margin-top: 4rem;*/
  /*display: flex;
  flex-direction: column;*/
  width: 90%;
  margin: 4rem auto 0 auto;

  & .productsTitle {
    margin-left: 6rem;
  }

  & .productsTitle h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  & .productsTitle div {
    width: 7rem;
    border-bottom: 0.5rem solid;
    margin-bottom: 1.5rem;
    color: var(--border-solds);
  }
`;

export const ProductsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  & .rec.rec-arrow {
    background-color: transparent;
    color: var(--bg-font-black);
  }

  & .rec.rec-arrow:hover {
    background-color: var(--border-solds);
    color: var(--bg-font-black);
  }

  & .rec.rec-dot {
    visibility: hidden;
  }
`;

export const Product = styled.div`
  width: 21.6rem;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & .imagesProducts {
    display: flex;
    position: relative;
  }

  & .imagesProducts .imageOffer {
    width: 8rem;
    position: absolute;
    right: 0;
  }

  & .infoProducts {
    width: 100%;
    min-height: 15rem;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & .infoProducts:hover {
    background-color: var(--bgpdt-hover);
  }

  & .infoProducts:hover .btnProduct button {
    display: block;
  }

  & .infoProducts p {
    font-size: 1.2rem;
    text-align: center;
    color: var(--user-border-pdtinfo-gray);
    font-weight: 400;
  }

  & .line-through {
    text-decoration: line-through;
  }

  & .infoProducts p:first-child {
    font-weight: 600;
  }

  & .infoProducts p:last-child {
    font-size: 1.1rem;
  }

  & .infoProducts h3 {
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
  }

  & .imageStars {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .imageStars p {
    font-size: medium !important;
    color: var(--cart-ellipse-red);
  }

  & .btnProduct {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .btnProduct button {
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: none;
    justify-content: center;
    align-items: center;
    width: 12.6rem;
    height: 3.3rem;
    border-radius: 0.5rem;
    background-color: var(--bg-font-black);
    color: var(--bg-font-white);
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (max-width: 820px) {
    & .btnProduct button {
      display: block;
    }
  }

  @media (max-width: 550px) {
    & .btnProduct button {
      display: block;
    }
  }
`;
