import React from 'react';
import { Router, Route, Redirect, HashRouter } from 'react-router-dom';

import Todo from 'root/todo/todo';
import About from 'root/about/about';

export default props => (
    <HashRouter>
        <div>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
        </div>
    </HashRouter>
)