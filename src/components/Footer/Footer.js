/* Importação de libs */
import React from "react";
import { ContainerFooter } from "./Footer.styled";

/* Importação das imagens */
import IMAGES from "../Images/index";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <div className="addressFooter">
          <h2>Localização</h2>
          <div></div>
          <ul>
            <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
            <li>Alphavile SP</li>
            <li>brasil@corebiz.ag</li>
            <li>+55 11 3090 1039</li>
          </ul>
        </div>

        <div className="buttonsFooter">
          <button>
            <img src={IMAGES.emailIcon} alt="Ícone de e-mail" />
            <p>ENTRE EM CONTATO</p>
          </button>
          <button>
            <img src={IMAGES.contactIcon} alt="Ícone de contato" />
            <p>FALE COM O NOSSO CONSULTOR ONLINE</p>
          </button>
        </div>

        <div className="LogosFooter">
          <div>
            <p>Created by</p>
            <img src={IMAGES.logoCore} alt="Logo Corebiz" />
          </div>
          <div>
            <p>Created by</p>
            <img src={IMAGES.logoVtex} alt="Logo Vtex" />
          </div>
        </div>
      </ContainerFooter>
    </>
  );
};

export default Footer;
