import React from "react";
import { ContainerSucessNews } from "./SucessNews.styled";
import { Link } from "react-router-dom";

const SucessNews = () => {
  return (
    <>
      <ContainerSucessNews>
        <div className="SucessNews">
          <h2>Seu e-mail foi cadastrado com sucesso!</h2>
          <p>
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </p>
          <Link to="/">
            <button>Cadastrar novo e-mail</button>
          </Link>
        </div>
      </ContainerSucessNews>
    </>
  );
};

export default SucessNews;
