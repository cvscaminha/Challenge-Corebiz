/* Importação de libs */
import React, { useEffect, useState } from "react";
import { ContainerProducts, Product, ProductsBox } from "./Products.styled";
import axios from "axios";
import Carousel from "react-elastic-carousel";

/* Importação das imagens */
import IMAGES from "../Images/index";

const Products = () => {
  /* Armazenamento do estado dos produtos */
  const [products, setProducts] = useState([]);

  /* Busca a informação na API */
  useEffect(() => {
    axios
      .get("https://corebiz-test.herokuapp.com/api/v1/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro" + err);
      });
  }, []);

  /* Armazena o estado dos itens no carrinho */
  let [item, setItem] = useState(0);

  /* Busca a informação no Local Storage e faz a validação */
  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  /* Persiste o número de itens no Local Storage e o apresenta na tela */
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
    parseInt(item);
    document.getElementById("cartCheckout").innerHTML = item;
  });

  // Função chamada após o clique no botão comprar, incrementa o número de itens e dispara setItem
  const addCart = (e) => {
    e.preventDefault();
    parseInt(item);
    item++;
    setItem(item);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <ContainerProducts>
        <div className="productsTitle">
          <h2>Mais Vendidos</h2>
          <div></div>
        </div>

        <ProductsBox>
          <Carousel breakPoints={breakPoints}>
            {products.map((product) => {
              /* Instanciação de variáveis para cada atributo  */
              let productsId = [];
              let productsName = [];
              let productsStars = [];
              let productsImgUrl = [];
              let productsListPrice = [];
              let productsPrice = [];
              let productsInstallmentsArray;
              let productsInstallments;
              let productsInstallmentsQuantity = [];
              let productsInstallmentValue = [];

              /* Armazenamento das informações de um produto */
              productsId = product.productId;
              productsName = product.productName;
              productsStars = product.stars;
              productsImgUrl = product.imageUrl;
              productsListPrice = product.listPrice;
              productsPrice = product.price;

              /* Captura o objeto que está dentro do array de installments */
              productsInstallmentsArray = Object.values(product.installments);
              productsInstallments = productsInstallmentsArray[0];

              /* Verifica se a informação é existente e armazena o valor, caso contrário
               *  não aplica a visibilidade do valor
               */
              if (productsInstallments) {
                productsInstallmentsQuantity = productsInstallments.quantity;
                productsInstallmentValue = productsInstallments.value;
              } else {
                productsInstallmentsQuantity = null;
                productsInstallmentValue = null;
              }

              /* Função para renderizar ratings */
              function imageStars(productsStars) {
                let arrayStars = [];
                let counter = 0;

                while (productsStars > 0) {
                  productsStars--;
                  arrayStars[counter] = <p>&#9733;</p>;
                  counter++;
                }
                while (counter < 5) {
                  arrayStars[counter] = <p>&#9734;</p>;
                  counter++;
                }
                return arrayStars;
              }

              /* Função para renderizar os preços na tela (caso disponíveis) */
              function renderListPrice(listPrice) {
                if (listPrice === null) {
                  return <p></p>;
                } else {
                  let price = JSON.stringify(listPrice);
                  let reais = Math.floor(price.length - 2);
                  let result =
                    price.substr(0, reais) + "," + price.substr(reais);
                  return <p className="line-through">De R$ {result}</p>;
                }
              }

              function renderPrice(productPrice) {
                let price = JSON.stringify(productPrice);
                let reais = Math.floor(price.length - 2);
                let result = price.substr(0, reais) + "," + price.substr(reais);

                return <h3>por R$ {result}</h3>;
              }

              function renderInstallments(
                productsInstallmentsQuantity,
                productsInstallmentValue
              ) {
                if (
                  productsInstallmentsQuantity === null ||
                  productsInstallmentValue === null
                ) {
                  return <p></p>;
                } else {
                  let price = JSON.stringify(productsInstallmentValue);
                  let reais = Math.floor(price.length - 2);
                  let result =
                    price.substr(0, reais) + "," + price.substr(reais);

                  return (
                    <p>
                      {" "}
                      ou em {JSON.stringify(productsInstallmentsQuantity)}x de
                      R$ {result}{" "}
                    </p>
                  );
                }
              }

              function renderOffer(listPrice) {
                if (listPrice === null) {
                  return <p></p>;
                } else {
                  return (
                    <img
                      src={IMAGES.OfferProduct}
                      alt="Produto em Oferta"
                      className="imageOffer"
                    />
                  );
                }
              }

              return (
                <Product>
                  <div key={productsId}>
                    <div className="imagesProducts">
                      {renderOffer(productsListPrice)}
                      <img src={productsImgUrl} alt="Imagem do Produto" />
                    </div>

                    <div className="infoProducts">
                      <p>{productsName}</p>
                      <div className="imageStars">
                        {imageStars(productsStars)}
                      </div>
                      <div>
                        {renderListPrice(productsListPrice)}
                        {renderPrice(productsPrice)}
                        {renderInstallments(
                          productsInstallmentsQuantity,
                          productsInstallmentValue
                        )}
                      </div>
                      <div className="btnProduct">
                        <button onClick={addCart} id="buttonProduct">
                          COMPRAR
                        </button>
                      </div>
                    </div>
                  </div>
                </Product>
              );
            })}
          </Carousel>
        </ProductsBox>
      </ContainerProducts>
    </>
  );
};

export default Products;
