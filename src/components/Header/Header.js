/* Importação de libs */
import React from "react";
import {
  ContainerHeader,
  HeaderElements,
  HeaderParagraph,
} from "./Header.styled";

/* Importação das imagens */
import IMAGES from "./../Images/index";

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <img src={IMAGES.logoCorebiz} alt="Logo Corebiz" />
        <HeaderElements className="userInput">
          <input placeholder="O que está procurando?" />
          <img src={IMAGES.searchImage} alt="Ícone Pesquisar" />
        </HeaderElements>
        <HeaderElements>
          <img src={IMAGES.userImage} alt="Ícone Usuário" />
          <HeaderParagraph>Minha Conta</HeaderParagraph>
          <img
            src={IMAGES.cartImage}
            alt="Ícone Carrinho de Compras"
            className="imgHeader"
          />
          <HeaderParagraph className="cartItems" id="cartCheckout">
            0
          </HeaderParagraph>
        </HeaderElements>
      </ContainerHeader>
    </>
  );
};

export default Header;
