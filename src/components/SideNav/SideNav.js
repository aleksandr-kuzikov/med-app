import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideNav.scss';

export const SideNav = ({links}) => {
  return (
    <ul className='sideNav'>
      {
        links.map((link, index) => {
          return(
            <li className="sideNav__item" key={index}>
              <NavLink to={link.to} className='sideNav__itemLink' activeClassName='sideNav__itemLink_active'>
                  <span className='sideNav__icon'>{link.icon}</span>
                  {link.title}
                </NavLink>
            </li>
        )})
      }
    </ul>
  )
}