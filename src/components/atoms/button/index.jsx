import React from 'react'
import { css } from 'emotion'

const style = css `
  background-color: var(--white);
  color: var(--primary-light);
  padding: 10px 20px;
  font-size: 18px;
  border: solid 2px var(--white);
  border-radius: 10px 10px 10px 10px;
  font-weight: 700;
  :hover {
    cursor: pointer;
    background: transparent;
    color: var(--white);
  }
`;

const Button = props => (
  <button {...props} className={style}>
    {props.children}
  </button>
);

export default Button