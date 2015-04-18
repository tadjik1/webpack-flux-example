import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import url from 'url';

import Flux from './flux';
import routes from './routes';
import NavBar from './components/navbar';

const router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
});

const flux = new Flux();

router.run( (Handler, state) => {
    React.render(
        <FluxComponent flux={flux}>
            <NavBar {...state} />
            <Handler {...state} />
        </FluxComponent>,
        document.body
    )
});

document.onclick = event => {
    const { toElement: target } = event;

    if (!target) return;

    if (target.tagName !== 'A') return;

    const href = target.getAttribute('href');

    if (!href) return;

    const resolvedHref = url.resolve(window.location.href, href);
    const { host, path } = url.parse(resolvedHref);

    if (host === window.location.host) {
        event.preventDefault();
        router.transitionTo(path);
    }
};
