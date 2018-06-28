import React from 'react';

import 'common/dependences';

import Header from 'common/header';

import Menu from 'common/menu';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Routes from 'root/routes';

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <Routes />
    <Footer />
  </div>
);
