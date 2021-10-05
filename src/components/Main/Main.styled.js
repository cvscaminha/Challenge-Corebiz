import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
`;

/* Slider Banner */
export const SliderBanner = styled.section`
  display: flex;
  margin-top: 4rem;
  height: 43rem;

  img {
    width: 100%;
    height: 100%;
    position: relative;
  }

  & .bannerMobile {
    display: none;
  }

  @media (max-width: 800px) {
    height: 30rem;
    & .bannerDesktop {
      display: none;
    }
    & .bannerMobile {
      display: block;
    }
  }
`;

export const BannerParagraph = styled.div`
  position: absolute;
  left: 5%;
  top: 25%;
  width: 50%;

  p {
    color: #fff;
    font-size: 3rem;
    font-weight: 700;
  }

  p:last-child {
    font-size: 4.5rem;
    font-weight: 900;
  }

  @media (max-width: 820px) {
    width: 100%;
    top: 33%;
    p {
      font-size: 3rem;
    }
    p:last-child {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 550px) {
    p {
      font-size: 2rem;
    }
    p:last-child {
      font-size: 2.5rem;
    }
  }
`;
