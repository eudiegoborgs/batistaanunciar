import React from "react"
import { css } from 'emotion';
import Navbar from "../molecules/navbar";
import BrandName from '../atoms/brand-name';

const style = css`
  background: #fff;
  position: fixed;
  top: 0;
  width: 100vw;

  .right, .left {
    display: flex;
    align-items: center;

    >* {
      padding: 0 10px;
      @media (max-width: 780px) {
        padding: 0 5px;
      }
    }
  }
`;

const Header = () => (
  <header className={style}>
    <div className="container">
      <div className="left">
        <BrandName />
      </div>
      <Navbar />
    </div>
  </header>
)

export default Header
