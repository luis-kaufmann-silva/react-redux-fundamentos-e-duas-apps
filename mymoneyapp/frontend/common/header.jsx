import React from 'react';

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <strong>My</strong>M
      </span>
      <span className="logo-lg">
        <i className="fa fa-money" />
        <strong>My</strong> Money
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a className="sidebar-toggle" data-toggle="offcanvas" />
    </nav>
  </header>
);
