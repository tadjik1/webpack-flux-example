import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './App';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/notfound';

export default (
    <Route handler={App}>
        <DefaultRoute name="home" handler={Home} />
        <Route name="about" path="/about" handler={About} />
        <Route name="contact" path="/contact" handler={Contact} />
        <NotFoundRoute name="notfound" handler={NotFound}/>
    </Route>
);