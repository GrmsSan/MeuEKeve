import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu } from './components/menu';
import Contact from './Contact';
import Calcs from './Calcs';
import style from './App.module.css';
import menuStyle from './components/menu.module.css';
import { cards } from './assets/mock/card';
import capaSuperiorImage from './assets/images/capasuperior2.jpg';
import profileImage from './assets/images/capasuperior.jpg';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function SobreMim() {
  return (
    <section id='sobre-mim' className={style.sobreMimSection}>
      <div className={style.sobreMimBackgroundContainer}>
        <img src={capaSuperiorImage} alt="Imagem de fundo Sobre Mim" className={style.sobreMimBackgroundImage} />
        <h2 className={style.sobreMimTitle}>Sobre mim</h2>
      </div>

      <div className={style.profileImageContainer}>
        <img src={profileImage} alt="Sua foto de perfil" className={style.profileImage} />
      </div>
      <p>
      Me chamo Kevilin, tenho 18 anos e sou movida por uma curiosidade constante. Sou apaixonada pelo universo da programação e atualmente curso Análise e Desenvolvimento de Sistemas no SENAI. Além dos códigos, também me encanto pelo mundo da fotografia — onde encontro uma forma de expressar minha criatividade — e pelos gatos, que conquistaram meu coração com seus jeitinhos únicos. Estou sempre em busca de aprender algo novo e transformar ideias em realidade.
      </p>

    </section>
  );
}

function Portfolio() {
  return (
    <section id='portfolio' className={style.PortfolioSection}>
      <h2>Portfólio</h2>
      <p>Alguns links de projetos realizados no Senai:</p>
      <div className={style.cardsGrid}>
        {cards.map((item, index) => (
          <div key={index}>
            <a href={item.titleLink} target="_blank" rel="noopener noreferrer">
              <h5>{item.text}</h5>
            </a>
            <img src={item.img} alt={item.text} width={200} height={"auto"} />
            {item.githubLink && (
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <a href="https://linkedin.com/in/kevilin-marcondes" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ marginRight: '5px', verticalAlign: 'middle' }} /> LinkedIn
      </a>
      <a href="https://www.instagram.com/kkkkev._/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ marginRight: '5px', verticalAlign: 'middle' }} /> Instagram
      </a>
      <a href="https://github.com/azedomel" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ marginRight: '5px', verticalAlign: 'middle' }} /> GitHub
      </a>
    </footer>
  );
}

function PaginaPrincipal() {
  return (
    <main>
      <SobreMim />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <>
    <div>
      <Menu
        option01={<a href="/" className={menuStyle.navLink}>Sobre Mim</a>}
        option02={<a href="#portfolio" className={menuStyle.navLink}>Portfólio</a>}
        option03={<Link to="/contact" className={menuStyle.navLink}>Contato</Link>}
        option04={<Link to="/calcs" className={menuStyle.navLink}>Calculadora</Link>}
        option05={<a href='/requisicao'>Consumo de API</a>}
      />

      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </>
  );
}