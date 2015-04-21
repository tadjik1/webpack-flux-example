import { Actions } from 'flummox';

export default class SeriesActions extends Actions {

  async getAllSeries() {
    let response;
    let url = 'https://api.mtstv.ru/v1/collections/all_series/items?offset=0&count=10&access_token=CU5QXs77_8SoNAV-18H3zyXjVx5bMGkRv401UAG6Mrk';
    try {

      response = await fetch(url);
      return await response.json();

    } catch (error) {
      return {serials: []};
    }
  }

}
