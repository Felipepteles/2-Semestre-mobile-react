import { Link } from "react-router-dom";
import './Footer.css'

export function Footer(){
    return(
        <footer>
        <div className="container__footer">
          <div className="imagem__footer">
          <img src="./logoFooter.png" alt="" className="logo__footer" />
          </div>
          <div className="container__midias__infos">
            <ul className="container__info__footer">
              <a href="" className="container__info__footer__quem__somos">
                Quem somos
              </a>
              <a href="" className="container__info__footer__suporte">
                Suporte
              </a>
              <a href="" className="container__info__footer__politicas">
                Políticas de privacidade
              </a>
              <a href="" className="container__info__footer__clientes">
                Nossos clientes
              </a>
            </ul>

            <a href="" className="texto__comercial">
              &copy; Elegancy, 2024. All rights reserved
            </a>

            <ul className="container__midias">
              <div className="container__midias1__mobile">
                <img src="./wppIcon.png" alt="" className="wpp" />
                <img src="./instaIcon.png" alt="" className="insta" />
                <img src="./fbIcon.png" alt="" className="fb" />
              </div>
              <div className="container__midias2__mobile">
                <img src="./xIcon.png" alt="" className="x" />
                <img src="./linkedinIcon.png" alt="" className="linkedin" />
                <img src="./gitIcon.png" alt="" className="git" />
              </div>
            </ul>
          </div>
        </div>
      </footer>
    )
}