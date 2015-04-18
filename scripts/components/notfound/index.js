import React from 'react';

export default class HomeHandler extends React.Component {
    render() {
        const href = "/lala/";
        return (
            <div>
                <h1>Not Found</h1>
                <a className="navbar-brand row" href="/">Home</a>
            </div>
        )
    };
}