import React from 'react';
import { css } from 'emotion';

const style = css`
  margin: 15px 10px;
  .fa {
    padding: 0 0;
  }
`;

const socialList = [
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/batistaanunciar'
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/batistaanunciar/'
  },
  {
    icon: 'youtube',
    link: 'https://www.youtube.com/c/ConnectSolim%C3%B5es'
  }
]

const SocialMenu = () => (
  <React.Fragment>
    { socialList.map(item => (
      <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.icon} className={`${style} social_links`}>
        <i class={`fa fa-${item.icon}`} />
      </a>
    ))}
  </React.Fragment>
)

export default SocialMenu