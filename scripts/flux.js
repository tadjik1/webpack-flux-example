import { Flux } from 'flummox';
import SeriesActions from './actions/SeriesActions';
import SeriesStore from './stores/SeriesStore';

export default class AppFlux extends Flux {

  constructor() {
    super();

    this.createActions('series', SeriesActions);
    this.createStore('series', SeriesStore, this);
  }

}
