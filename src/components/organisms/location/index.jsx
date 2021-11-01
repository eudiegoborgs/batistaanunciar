import React from 'react';
import { css } from 'emotion';
import Content from '../content';

const style = css`
  iframe {
    width: 100vw;
    height: 400px;
    border: 0;
    margin: 0;
    padding: 0;
    pointer-events: none;
  }
`

const Location = () => (
  <section id="localizacao" className={`${style}`}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15013.413051413112!2d-43.924967!3d-19.8250002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3f3ca664ee762d5!2sIgreja%20Batista%20Connect!5e0!3m2!1spt-BR!2sbr!4v1635794292124!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
  </section>
)

export default Location;