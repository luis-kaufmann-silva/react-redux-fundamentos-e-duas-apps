import React from 'react';
import './Button.css';

export default props => (
    <button 
        onClick={(e) => props.onClick && props.onClick(props.label)}
        className={`
            button 
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.tripple ? 'tripple' : ''}
        `}
    >
        {props.label}
    </button>
)