import React from 'react';
import { css } from 'emotion';

const style = css`
  max-width: 40%;
  @media(max-width: 560px) {
    max-width: 100%;
  }
  h2 {
    margin-bottom: 0.5rem;
    :after {
      margin: 10px 0;
      content: "";
      display: block;
      width: 50px;
      background: white;
      height: 5px;
    }
  }
`;

const TypeWritter = () => {
  return (
    <div className={style}>
      <h2>Nós somos a <br/> Igreja Batista Anunciar</h2>
      <p><em>A nossa principal missão é pregar o evangelho de Cristo, edificando uma igreja de discipulos através da visão celular.</em></p>
    </div>
  )
}

export default TypeWritter;