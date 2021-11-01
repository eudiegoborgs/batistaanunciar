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
  height: 80vh;
  color: #ffffff;
  text-align: left;
  overflow: hidden;

  .caption {
    padding: 25vh 40px;
    height: 80vh;
    background-image: linear-gradient(#212121, rgba(33,33,33, 0.8));
  }

  a {
    color: white !important;
    margin: 15px 0px;
    margin-right: 20px;
  }
`

const Banner = () => (
  <div className={style}>
    <div className="caption">
      <div className="container">
        <TypeWritter />
        <small>Acompanhe-nos em nossas redes sociais:</small><br/>
        <SocialMenu />
      </div>
    </div>
  </div>
)

export default Banner;