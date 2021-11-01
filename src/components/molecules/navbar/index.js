import { Link } from "gatsby"
import React from "react"
import { css } from 'emotion';
import MobileMenu from '../../atoms/mobile-menu'
import items from '../../atoms/menu-items'
import SocialMenu from '../../molecules/social-menu'

const style = css `
  display: flex;
  align-items: center;
  .menu {
    top: 45px;
    transition: display 0.5s linear;
  }
  .menu {
    .social-menu {
      display: inline;
      color: black;
    }
  }
  .mobile-menu {
    display: none;
    >* {
      height: 6px;
    }
  }
  .menu-item {
    padding: 2px 0px;
    margin: 0px 5px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.6rem;
    border-bottom: solid 3px transparent;
    @media(max-width: 780px) {
      padding: 0 6px;
    }
    &:hover, &[aria-current="page"] {
      border-bottom: solid 3px var(--primary-light);
      color: black;
    }
  }
  @media(max-width: 560px) {
    .menu {
      display: none;
    }
    .mobile-menu {
      display: inline-block;
    }
    .menu.active {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(255, 255, 255, 0.9);
      padding: 3rem 1.0875rem;
      .menu-item {
        display: block;
        margin: 20px auto;
        font-size: 2rem;
        text-align: right;
        padding: 10px 10px;
      }
      .social-menu {
        display: block;
        text-align: right;
      }
    }
  }
`;

const Navbar = () => {
  const [Open, setOpen] = React.useState(false);
  return (
    <div className={style}>
      <div className={`menu ${Open && 'active'}`}>
        {items.map(i => (
          <Link to={i.path} className="menu-item">
            {i.name}
          </Link>
        ))}
        <div className="social-menu">
          <SocialMenu />
        </div>
      </div>
      <div className="mobile-menu">
        <MobileMenu onClick={setOpen}/>
      </div>
    </div>
  )
}

export default Navbar
