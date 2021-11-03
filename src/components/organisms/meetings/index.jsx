import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
  .section_title {
    text-align: center;
    &::after {
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
  .content {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    @media(max-width: 560px) {
      display: block;
    }
    >div {
      width: 25%;
      @media(max-width: 560px) {
        width: 100%;
      }
      padding: 15px;
      text-align: center;

      &::before {
        margin: 0 auto;
        margin-bottom: 35px;
        content: "";
        display: block;
        width: 120px;
        background: var(--black);
        height: 1px;
        opacity: .2;
      }
      &:first-child {
        &::before {
          background: transparent;
        }
      }
      @media(min-width: 560px) {
        &::before {
          margin-top: 30px;
          margin-left: -15px;
          margin-bottom: 20px;
          position: absolute;
          width: 1px;
          height: 120px;
        }
      }
      p {
        font-style: italic;
        font-size: 0.8rem;
      }
    }
    h4 {
      max-width: 90%;
      margin: 0 auto;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
  }
`

const Meetings = () => (
  <section className={`${style}`}>
    <a className="anchor" id="cultos"/>
    <Content>
      <h2 className="section_title">Cultos</h2>
      <div className="content">
        <div>
          <h4>Anunciar TEEN</h4>
          <p>
            Toda terça-feira às<br/>20:00
          </p>
          <p><strong>Públic Alvo:</strong> <br/>
          Adolescentes.</p>
        </div>
        <div>
          <h4>Escola Bíblica</h4>
          <p>
            Toda segunda-feira às<br/>20:00
          </p>
          <p><strong>Públic Alvo:</strong> <br/>
          Todos os membros, familiares e visitantes.</p>
        </div>
        <div>
          <h4>Culto de Celebração</h4>
          <p>
            Todo domingo às<br/>09:30 | 17:00 | 19:30
          </p>
          <p><strong>Públic Alvo:</strong> <br/>
          Todos os membros, familiares e visitantes.</p>
        </div>
        <div>
          <h4>Culto Diamante</h4>
          <p>
            2º sábado do mês às<br/>16:30
          </p>
          <p><strong>Públic Alvo:</strong> <br/>
          Pessoas idosas.</p>
        </div>
        <div>
          <h4>Juventude Anunciar</h4>
          <p>
            Todo sábado às<br/>20:00
          </p>
          <p><strong>Públic Alvo:</strong> <br/>
          Jovens.</p>
        </div>
      </div>
    </Content>
  </section>
)

export default Meetings;