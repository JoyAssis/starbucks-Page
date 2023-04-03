import React, { useState } from "react";

import * as S from "./style/style";

import Logo from "./assets/logo.png";
import Facebook from "./assets/facebook.png";
import Twitter from "./assets/twitter.png";
import Instagram from "./assets/instagram.png";
import Img1 from "./assets/img1.png";
import LampOff from "./assets/bulb.png";
import LampOn from "./assets/bulbon.png";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <S.GlobalStyle />
      <S.Header>
        <S.Logo>
          <img src={Logo} alt="logo verde do starbucks" />
        </S.Logo>
        <S.Nav>
          <ul>
            <li>Inicio</li>
            <li>Menu</li>
            <li>Novidades</li>
            <li>Contato</li>
            <S.Darkmode
              onClick={handleDarkMode}
              src={isDarkMode === false ? LampOff : LampOn}
            />
          </ul>
        </S.Nav>
      </S.Header>
      <S.Main>
        <section>
          <S.Texts>
            <h2>
              Não é apenas Café É <span>Sarbucks</span>{" "}
            </h2>
            <p>
              Independente do seu gosto ou paladar, encontrará um café
              Starbucks® perfeito para você.
            </p>
            <S.Button>Saber Mais</S.Button>
          </S.Texts>
          <S.Social>
            <S.SocialLink
              href="https://www.facebook.com/StarbucksBrasil/"
              target="_blank"
            >
              <img src={Facebook} alt="facebook" />
            </S.SocialLink>
            <S.SocialLink
              href="https://twitter.com/StarbucksBrasil"
              target="_blank"
            >
              <img src={Twitter} alt="twitter" />
            </S.SocialLink>
            <S.SocialLink
              href="https://www.instagram.com/starbucksbrasil/"
              target="_blank"
            >
              <img src={Instagram} alt="instagram" />
            </S.SocialLink>
          </S.Social>
        </section>
        <S.CoffeeBox>
          <S.CoffeeCircle></S.CoffeeCircle>
          <S.Coffee src={Img1} alt="img1" />
        </S.CoffeeBox>
      </S.Main>
    </div>
  );
}
