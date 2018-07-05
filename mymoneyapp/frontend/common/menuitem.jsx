import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <li className="">
        <Link to={props.path}>
            <i className={`fa fa-${props.icon}`} />
            <span>{props.label}</span>
        </Link>
    </li>
);
