import React from 'react';

export default props => (
    <li className="treeview">
        <a href="javascript:void(0)">
            <i className={`fa fa-${props.icon}`} /> <span>{props.label}</span>
            <i className="fa fa-angle-left pull-right" />
        </a>
        <ul className="treeview-menu">{props.children}</ul>
    </li>
);
