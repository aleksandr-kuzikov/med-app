import React from 'react';
import { Link } from 'react-router-dom';
import './SectionLink.scss';


export const SectionLink = ({className, to, title, text, Icon}) => {
  return(
    <Link to={to} className={`sectionLink ${className ? className : ''}`}>
      <div className="sectionLink__img">
        <Icon />
      </div>
      <div className="sectionLink__main">
        <h3 className="sectionLink__title">{title}</h3>
        <div className="sectionLink__hr"/>
        <div className="sectionLink__text">
          {text}
        </div>
      </div>
    </Link>
  )
}