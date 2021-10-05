/* Importação de libs */
import React, { useState } from "react";
import { ContainerNewsletter } from "./Newsletter.styled";
import axios from "axios";
import { useHistory } from "react-router-dom";

/* Importação das imagens */
//import IMAGES from "../Images/index";

const Newsletter = () => {
  /* Armazenamento do estado dos inputs da newsletter */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  /* Armazena os dados dos inputs da Newsletter para envio à API */
  var dataNewsLetter = { name: name, email: email };

  /* Configurações para realizar o POST das informações para a API */
  var configPost = {
    method: "post",
    url: "https://corebiz-test.herokuapp.com/api/v1/newsletter",
    headers: {},
    data: dataNewsLetter,
  };

  /* Variável que armazena o Regex para teste de validação do email */
  var validateMail = /\S+@\S+\.\S+/;

  // Função para realizar a validação dos dados dos inputs e o POST deles para a API caso sejam válidos
  let history = useHistory();
  function handleNewsletter() {
    axios(configPost)
      .then(function (response) {
        // alert(
        //   "Cadastro realizado com sucesso. Obrigado por assinar nossa newsletter!"
        // );
        history.push("/SucessNews");
        console.log(JSON.stringify(response.data));
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
      })
      .catch(function () {
        if (name === "" && email === "") {
          /*alert("Insira um nome");*/
          document.getElementById("msgInputName").innerHTML =
            "Preencha com seu nome completo";
          document.getElementById("name").style.border = "0.1rem solid #ff0000";
          document.getElementById("msgInputEmail").innerHTML =
            "Preencha com um e-mail válido";
          document.getElementById("email").style.border =
            "0.1rem solid #ff0000";
        } else if (name === "") {
          document.getElementById("msgInputName").innerHTML =
            "Preencha com seu nome completo";
          document.getElementById("name").style.border = "0.1rem solid #ff0000";
        } else if (email === "") {
          document.getElementById("msgInputEmail").innerHTML =
            "Preencha com um e-mail válido";
          document.getElementById("email").style.border =
            "0.1rem solid #ff0000";
        } else if (!validateMail.test(email)) {
          /*alert("Insira um email no formato correto");*/
          document.getElementById("msgInputEmail").innerHTML =
            "Preencha com um e-mail válido";
          document.getElementById("email").style.border =
            "0.1rem solid #ff0000";
        }
      });
  }

  return (
    <>
      <ContainerNewsletter>
        <div className="newsletterTitle">
          <h2>Participe de nossas news com promoções e novidades!</h2>
        </div>
        <div className="newsletterForm">
          <div>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <div id="msgInputName"></div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="msgInputEmail"></div>
          </div>
          <div>
            <button onClick={handleNewsletter}>Eu quero!</button>
          </div>
        </div>
      </ContainerNewsletter>
    </>
  );
};

export default Newsletter;
