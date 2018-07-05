import React from 'react';

import 'common/dependences';

import Header from 'common/header';
import Menu from 'common/menu';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

import Routes from 'root/routes';
import { BrowserRouter as Router } from 'react-router-dom';

import Message from 'common/message';

export default props => (
  <Router>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Routes />
      </div>
      <Footer />
      <Message />
    </div>
  </Router>
);
