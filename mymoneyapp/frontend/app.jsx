import React from 'react';

import 'common/dependences';

import Header from 'common/header';

import Menu from 'common/menu';
import Sidebar from 'common/sidebar';
import Footer from 'common/footer';

export default props => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div>
      <h1>Ola</h1>
    </div>
    <Footer />
  </div>
);
