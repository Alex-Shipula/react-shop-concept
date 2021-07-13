import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationItem = ({ clicked, style, linkType, link, exact, children }) => {
  return (
    <li
      style={{ alignSelf: 'flex-start' }}
      className="nav-link-wrapper">
      <NavLink
        onClick={clicked}
        style={style}
        className={["nav-link", linkType].join(' ')}
        to={link}
        exact={exact}>
        {children}
      </NavLink>
    </li>
  );
}
export default NavigationItem;
