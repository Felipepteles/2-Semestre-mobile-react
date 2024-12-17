import { Titulo } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Contato.css";

export function Contato() {
  return (
    <>
      <Titulo />
      <section className="contato__container">
        <h1 className="contato__titulo">Entre em Contato</h1>
        <ul className="container__contato__infos">
          <ol className="container__contato__infos__esquerda">
            <div className="container__contato__infos__esquerda__esquerda">
              <label htmlFor="" className="nome__titulo">
                Nome
              </label>
              <br />
              <input type="text" id="nome" className="nome" />
              <br />
              <br />
              <label htmlFor="" className="telefone__titulo">
                Telefone
              </label>
              <br />
              <input type="text" id="telefone" className="telefone" />
              <br />
              <br />
              <label htmlFor="" className="email__titulo">
                Email
              </label>
              <br />
              <input type="text" id="email" className="email" />
            </div>
            <div className="container__contato__infos__direita">
              <h3 className="infos__direita__titulo">Contato</h3>
              
                <a href="" className="infos__direita__contato2">
                  elegancy@elegancy.com.br
                </a>
              <h3 className="infos__direita__endereco__titulo">Endereço</h3>
              <p className="infos__direita__endereco">R. Dom Pedro II, 901</p>
              <p className="infos__direita__cidade">Pelotas - RS</p>

              <div className="infos__direita__icones">
                <img src="./wppIcon.png" alt="" className="wpp__icon" />
                <img src="./instaIcon.png" alt="" className="insta__icon" />
              </div>
            </div>
          </ol>
          <img
            src="./public/imgContato.png"
            alt=""
            className="img__direita__contato__info"
          />
        </ul>
      </section>
      <Footer />
    </>
  );
}
