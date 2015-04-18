import React from 'react';
import connectToStores from 'flummox/connect';

class HomeHandler extends React.Component {

    loadSeries() {
        let seriesActions = this.props.flux.getActions('series');
        return seriesActions.getAllSeries();
    };

    render() {
        let series = this.props.series.map( (series) => {
            return (
                <div className="col-md-3">
                    <h3>{series.title}</h3>
                    <p>{series.description}</p>
                </div>
            )
        });

        return (
            <div className="container-fluid">

                <div className="starter-template">
                    <h1>Index page</h1>

                    <p className="lead">Use document as a way to
                        quickly start any project.<br/>
                        All you get is text and a mostly barebones HTML document.
                    </p>
                </div>
                <button onClick={this.loadSeries.bind(this)}>Load Series</button>
                <div className="row">
                    {series}
                </div>
            </div>

        )
    };

}

HomeHandler = connectToStores(HomeHandler, {
    series: store => ({
        series: store.getAllSeries()
    })
});

export default HomeHandler;