import { Actions } from 'flummox';

export default class SeriesActions extends Actions {

    getAllSeries() {
        return [
            {id:1, title: 'lala', description: 'param'},
            {id:2, title: 'adsf', description: '123123'},
            {id:3, title: 'owflasd', description: 'asdasd'}
        ]
    }

}