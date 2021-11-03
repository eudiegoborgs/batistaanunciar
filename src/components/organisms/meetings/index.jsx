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
    >div {
      width: 25%;
      padding: 15px;
      text-align: center;
      &::before {
        margin-top: 30px;
        margin-left: -15px;
        margin-bottom: 20px;
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        background: var(--black);
        height: 60px;
        opacity: .2;
      }
      &:first-child {
        &::before {
          background: transparent;
        }
      }
      p {
        font-style: italic;
      }
    }
    h4 {
      max-width: 70%;
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
            Toda terça-feira ás<br/>20:00
          </p>
        </div>
        <div>
          <h4>Escola Bíblica</h4>
          <p>
            Toda segunda-feira ás<br/>20:00
          </p>
        </div>
        <div>
          <h4>Culto de Celebração</h4>
          <p>
            Todo domingo ás<br/>09:30 | 17:00 | 19:30
          </p>
        </div>
        <div>
          <h4>Juventude Anunciar</h4>
          <p>
            Todo sábado ás<br/>20:00
          </p>
        </div>
      </div>
    </Content>
  </section>
)

export default Meetings;