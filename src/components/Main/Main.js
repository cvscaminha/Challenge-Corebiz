/* Importação de libs */
import React from "react";
import { BannerParagraph, ContainerMain, SliderBanner } from "./Main.styled";

/* Importação das imagens */
import IMAGES from "../Images/index";

const Main = () => {
  return (
    <>
      <ContainerMain>
        <SliderBanner>
          <img
            src={IMAGES.Banner}
            alt="Slider Banner"
            className="bannerDesktop"
          />
          <img
            src={IMAGES.BannerMobile}
            alt="Slider Banner Mobile"
            className="bannerMobile"
          />
          <BannerParagraph>
            <p>Olá, o que você está buscando?</p>
            <p>Criar ou migrar seu e-commerce?</p>
          </BannerParagraph>
        </SliderBanner>
      </ContainerMain>
    </>
  );
};

export default Main;
