import React from 'react';
import { Link } from "gatsby"
import SocialMenu from '../molecules/social-menu';
import FooterLogo from '../atoms/footer-logo';
import items from '../atoms/menu-items'
import { css } from 'emotion';


const style = css`
  background: black;
  color: white;
  .author {
    font-size: 12px;
    color: white;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    padding: 20px 0;
  }
  .main {
    display: flex;
    @media(max-width: 560px) {
      display: block;
    }
    width: 100%;
    border-bottom: solid 1px #ababab;
    >div {
      width: 25%;
      padding: 10px;
      @media(max-width: 560px) {
        width: 100%;
      }
    }
  }
  .footer_logo {
    img {
      padding: 0;
      margin: 0;
      @media(max-width: 560px) {
        margin: 0 auto;
        display: block;
        width: 50%;
      }
    }
    text-align: center;
  }
  a {
    color: white;
  }
  .footer_menu_item, .describe_text {
    font-size: 0.8rem;
    line-height: 1rem;
    margin: 0;
  }
  .describe_text {
    font-style: italic;
    margin-bottom: 0.5rem;
  }
  .footer_sitemap {
    padding: 10px 20px !important;
    @media(max-width: 560px) {
      display: none;
    }
    ul {
      list-style-type: square;
      margin: 0 1rem;
      li {
        margin: 0;
      }
    }
  }
  h5 {
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    :after {
      margin: 2px 0;
      content: "";
      display: block;
      width: 20px;
      background: white;
      height: 2px;
    }
    &.title {
      margin-top: 0;
    }
  }
`

const Footer = () => (
  <footer className={`${style}`}>
    <div className="container">
      <div className="main">
        <div className="footer_logo">
          <FooterLogo />
          <SocialMenu />
        </div>
        <div className="footer_resume">
          <p className="describe_text">
            A nossa principal missão é pregar o evangelho de Cristo, somos a <strong>Igreja Batista Anunciar</strong>.
          </p>
          <h5>Visão:</h5>
          <p className="describe_text">
            Ser um sinal histórico do reino de Deus, edificando uma igreja de discipulos
          </p>
          <h5>Missão:</h5>
          <p className="describe_text">
            Capacitação e treinamento dos membros como discipulos do evangelho de Cristo na visão celular.
          </p>
        </div>
        <div className="footer_sitemap">
          <h5 className="title">Mapa do site:</h5>
          <ul>
            {items.map(i => (
              <li>
                <Link to={i.path} className="footer_menu_item">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_contact_info">
          <h5 className="title">Contato:</h5>
          <address className="describe_text">
            Endereço:<br/>
            Rua Pau Brasil, nº 40, Solimões<br/>
            Belo Horizonte/MG<br/>
            CEP: 31.742-750.
          </address>
          <phone className="describe_text">Telefone: 31 3437-0763</phone>
          <h5>Contribua:</h5>
          <p className="describe_text">
            "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria." - 2 Coríntios 9:7
          </p>
          <p className="describe_text">
            PIX: <strong>31 98649-2928</strong>
          </p>
        </div>
      </div>
      <div className="author">
        Desenvolvido com <i className="fa fa-heart"/> por <a target="_blank" href="https://diegoborgs.com.br">DiegoBorgs</a>
      </div>
    </div>
  </footer>
);

export default Footer;