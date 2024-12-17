import './Titulo.css';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Titulo() {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <div className='cabecalho'>
        <div className='cabecalho__hero'>
          <img src="./logo.png" alt="logo" />
          <div className='cabecalho__titulo'>
            <h1>Flor do Campo</h1>
            <hr />
            <h3>Espaço de Beleza</h3>
          </div>
        </div>
        <nav className='cabecalho__links' ref={navRef}>
          <a className='links' href='/home'>Home</a>
          <a className='links' href='/clientes'>Clientes</a>
          <a className='links' href='/produtos'>Produtos</a>
          <a className='links' href='/home'>Perfil</a>
          <a className='links' href='/'>Sair</a>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className='nav-btn' onClick={showNavBar}>
          <FaBars />
        </button>
      </div>

    </header>
  )
}