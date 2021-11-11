import React from 'react';
import { css } from 'emotion';
import Content from '../content';
import qrcode from './qrcode.jpeg';

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
    min-width: 30%;
    img {
      margin: 0;
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
      <h2 className="section_title gradient__text gradient__text__light">Nos ajude a manter essa obra</h2>
      <div className="content">
        <div className="info">
          <p>
            "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria." <br />
            - 2 Coríntios 9:7
          </p>
          <h4>Dados bancários:</h4>
          <ul>
            <li><strong>Banco:</strong> Caixa Economica Federal</li>
            <li><strong>Agência:</strong> 2983</li>
            <li><strong>Conta:</strong> 3441-5</li>
            <li><strong>Operação:</strong> 003</li>
            <li><strong>Titula:</strong> Primeira Igreja Batista Floramar</li>
            <li><strong>PIX (Telefone):</strong> 31986492928</li>
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