import { Actions } from 'flummox';

export default class SeriesActions extends Actions {

  async getAllSeries() {
    let response;
    let url = process.env.API_URL;
    try {

      response = await fetch(url);
      return await response.json();

    } catch (error) {
      return {serials: []};
    }
  }

}
