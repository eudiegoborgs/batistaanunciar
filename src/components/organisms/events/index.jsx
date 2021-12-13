import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
  background-color: var(--primary);
  color: var(--white);
  .section_title {
    &::after {
      background-color: var(--white);
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

const Events = () => (
  <section className={`${style}`}>
    <a className="anchor" id="cultos"/>
    <Content>
      <h2 className="section_title">Próximos eventos</h2>
      <div className="content">
        <div id="sympla-widget-1440925" height="auto"></div>
        <script src="https://www.sympla.com.br/js/sympla.widget-pt.js/1440925"></script>
      </div>
    </Content>
  </section>
)

export default Events;