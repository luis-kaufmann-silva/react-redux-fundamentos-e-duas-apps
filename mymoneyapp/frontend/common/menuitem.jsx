import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <li className="">
    <Link to={props.path}>
      <i className={`fa fa-${props.icon}`} />
      {props.label}
    </Link>
  </li>
);
