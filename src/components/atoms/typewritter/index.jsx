import React from 'react';
import { css } from 'emotion';

const style = css`
  max-width: 63%;
  @media(max-width: 560px) {
    max-width: 100%;
  }
  h2 {
    font-size: 3rem;
  }
`;

const TypeWritter = () => {
  return (
    <div className={style}>
      <h2 className="section_title">Nós somos a <br/>Igreja Batista Anunciar</h2>
      <p><em>A nossa principal missão é pregar o evangelho de Cristo, edificando uma igreja de discipulos através da visão celular.</em></p>
    </div>
  )
}

export default TypeWritter;