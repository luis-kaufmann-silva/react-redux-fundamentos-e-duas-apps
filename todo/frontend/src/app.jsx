import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';
import React from 'react';

import Routes from './routes';
import Menu from 'root/template/menu';

export default props => (
    <div>
        <Menu/>
        <div className="container">
            <Routes/>
        </div>
        
    </div>
)
