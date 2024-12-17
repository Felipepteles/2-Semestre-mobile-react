import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { NovoClienteElegancy } from "../Cliente Elegancy/NovoClienteElegancy";

export function Titulo() {
  const [clientesElegancy, setClientesElegancy] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setMode] = useState(false);

  const ToggleMode = () => {
    setMode(!active);
  };

  useEffect(() => {
    if (localStorage.getItem("clientesElegancy")) {
      const clientesElegancy2 = JSON.parse(
        localStorage.getItem("clientesElegancy")
      );
      setClientesElegancy(clientesElegancy2);
    }
  }, []);

  function abrirForm() {
    setOpen(true);
  }

  return (
    <>
      <header className="header__full">
        <div className="container__header">
          <img src="./logoHeader.png" alt="" className="logo__header" />
          <div className="container__menu__hamburguer">
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
              <div className="hamburguer hamburguerIcon"></div>
            </div>
            <hr className="linha__logo" />
            <div className={active ? "container__links__mobile menuOpen" : "container__links__mobile menuClose"}>
              <a href="" className="home__header__mobile">
                <Link to="/">Home</Link>
              </a>
              <a className="contato__header__mobile">
                <Link to="/contato">Contato</Link>
              </a>
              <button onClick={abrirForm} className="login__header__mobile">
                Cadastre-se
              </button>
              <a className="contato__header">
                <Link to="/home">Login</Link>
              </a>
            </div>
          </div>
          <nav className="container__links__header">
            <a href="" className="home__header">
              <Link to="/">Home</Link>
            </a>
            <a className="contato__header">
              <Link to="/contato">Contato</Link>
            </a>
            <button onClick={abrirForm} className="login__header">
              Cadastre-se
            </button>
            <a className="contato__header">
              <Link to="/home">Login</Link>
            </a>
          </nav>
        </div>
      </header>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <NovoClienteElegancy
          setOpen={setOpen}
          clientesElegancy={clientesElegancy}
          setClientesElegancy={setClientesElegancy}
        />
      </Modal>
    </>
  );
}