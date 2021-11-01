import React from 'react'
import { css } from 'emotion'
import Typewriter from "typewriter-effect"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from './logo.png'

const style = css`
  line-height: 1;
  font-size: 1.3rem;
  color: black !important;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  max-width: 200px;
  img {
    margin-bottom: 0;
  }
  @media (max-width: 780px) {
    font-size: 0.9rem;
  }
`;

const BrandName = () => {
  return (
    <Link to="/" className={style}>
      <img src={logo} />
    </Link>
  )
}

export default BrandName;