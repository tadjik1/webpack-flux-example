import { Store } from 'flummox';

export default class SeriesStore extends Store {

    constructor(flux) {
        super(); // Don't forget this step


        const seriesActionIds = flux.getActionIds('series');
        this.register(seriesActionIds.getAllSeries, this.handleSeries);

        this.state = {
            series: []
        };
    };

    handleSeries(series) {
        this.setState({
            series: this.state.series.concat(series)
        });
    };

    getAllSeries() {
        return this.state.series;
    };

}