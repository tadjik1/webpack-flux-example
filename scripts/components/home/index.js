import React from 'react';
import connectToStores from 'flummox/connect';
import './home.styl';

class HomeHandler extends React.Component {

  async loadSeries() {
    let seriesActions = this.props.flux.getActions('series');
    return await seriesActions.getAllSeries();
  };

  render() {
    let seriesElements = this.props.series.map((series) => {
      return (
        <div className='col-md-3'>
          <div className='thumbnail'>
            <img src={series.poster} alt={series.name}/>

            <div className='caption'>
              <h3>{series.name}</h3>

              <p>{series.description}</p>

              <p>
                <a href={series.url} className='btn btn-primary' role='button'>Watch it</a>
              </p>
            </div>
          </div>
        </div>
      );
    });

    let button = function () {
      if (!this.props.series.length) {
        return (
          <p>
            <button className='btn btn-primary btn-lg' onClick={this.loadSeries.bind(this)}>
              Load series
            </button>
          </p>
        );
      } else {
        return (<span/>);
      }
    };

    return (
      <div className='container-fluid'>

        <div className='starter-template'>
          <div className='jumbotron'>
            <h1>Hello, world!</h1>
            {button.call(this)}
          </div>
        </div>
        <div className='row'>
          {seriesElements}
        </div>
      </div>

    );
  };

}

HomeHandler = connectToStores(HomeHandler, {
  series: store => ({
    series: store.getAllSeries()
  })
});

export default HomeHandler;
