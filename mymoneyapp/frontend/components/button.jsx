import React from 'react';

export default props => (
  <button type={props.type || 'button'}>{props.label}</button>
);
