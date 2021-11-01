import React from 'react'
import { css } from 'emotion'
import Typewriter from "typewriter-effect"
import { StaticQuery, graphql, Link } from "gatsby"
import logo from './footer-logo.png'

const style = css`
`;

const FooterLogo = () => {
  return (
    <img src={logo} className={style} />
  )
}

export default FooterLogo;