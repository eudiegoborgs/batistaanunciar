import React from 'react';
import banner from '../../images/banner/banner.jpeg';
import { css } from 'emotion';
import SocialMenu from '../molecules/social-menu';
import TypeWritter from '../atoms/typewritter';

const style = css`
  background-color: #212121;
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  color: black;
  text-align: left;
  overflow: hidden;

  .caption {
    padding: 20vh 40px;
    background-image: linear-gradient(#FFF, rgba(255,255,255, 0.8));
  }

  a {
    color: black !important;
    margin: 15px 0px;
    margin-right: 20px;
  }

  .section_title {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`

const Banner = () => (
  <div className={style}>
    <div className="caption">
      <div className="container">
        <TypeWritter />
        <small><em>Acompanhe nossas redes sociais:</em></small><br/>
        <SocialMenu />
      </div>
    </div>
  </div>
)

export default Banner;