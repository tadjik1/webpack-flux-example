import SeriesStore from '../SeriesStore';
import Flux from '../../flux';

const flux = new Flux();

const seriesStore = new SeriesStore(flux);

describe('series store tests', () => {
  it('should return empty array', () => {
    expect(seriesStore.getAllSeries()).to.deep.equal([]);
  });
});
