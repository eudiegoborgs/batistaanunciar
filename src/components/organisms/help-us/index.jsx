import React from 'react';
import { css } from 'emotion';
import Content from '../content';
import qrcode from './qrcode.png';

const style = css`
  .content {
    display: flex;
    justify-content: space-between;
  }
  .info {
    padding-right: 50px;
    h4 {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    ul {
      list-style-type: none;
      margin: 0;
      li {
        margin: 0;
      }
    }
  }
  .qrcode {
    min-width: 25%;
    img {
      margin: 0;
      width: 100%;
    }
    small {
      font-style: italic;
      font-size: 0.7rem;
      line-height: 0.7rem;
    }
    @media(max-width: 560px) {
      display: none;
    }
  }
`

const HelpUs = () => (
  <section className={`${style} dark`}>
    <a className="anchor" id="contribua"/>
    <Content>
      <h2 className="section_title">Nos ajude a manter essa obra</h2>
      <div className="content">
        <div className="info">
          <p>
            "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria." <br />
            - 2 Coríntios 9:7
          </p>
          <h4>Dados bancários:</h4>
          <ul>
            <li><strong>Banco:</strong> Cora SCD - 403</li>
            <li><strong>Agência:</strong> 0001</li>
            <li><strong>Conta:</strong> 1646331-8</li>
            <li><strong>Titula:</strong> Igreja Batista Anunciar</li>
            <li><strong>PIX (CNPJ):</strong> 44.495.354/0001-20</li>
          </ul>
        </div>
        <div className="qrcode">
          <img src={qrcode} />
          <small>QR Code do PIX</small>
        </div>
      </div>
    </Content>
  </section>
)

export default HelpUs;