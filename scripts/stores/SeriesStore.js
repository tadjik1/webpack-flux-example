import { Store } from 'flummox';

function resizeImage(images, sizes) {
  let image = images.find((img) => img.type === 'poster' && img.original_width > img.original_height);

  return image.sized_url.replace('{width}', sizes.width).replace('{height}', sizes.height).replace('{crop}', '');
}

export default class SeriesStore extends Store {

  static parse(response) {
    return response.map((series) => {
      return {
        name: series.name,
        poster: resizeImage(series.images, {width: 242, height: 200}),
        description: series.description.slice(0, 80) + '...',
        url: '/' + series.id
      }
    });
  }

;

  constructor(flux) {
    super(); // Don't forget this step


    const seriesActionIds = flux.getActionIds('series');
    this.register(seriesActionIds.getAllSeries, this.handleSeries);

    this.state = {
      series: []
    };
  }

;

  handleSeries(response) {
    let series = SeriesStore.parse(response.items);
    this.setState({
      series: this.state.series.concat(series)
    });
  }

;

  getAllSeries() {
    return this.state.series;
  }

;

}
