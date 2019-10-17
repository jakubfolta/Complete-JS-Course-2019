import axios from 'axios';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
    	const key = '36d561b9fe597511d1bb317b56c8717d';
    	const proxy = 'https://cors-anywhere.herokuapp.com/';

    	try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;

            console.log(this.result);
    	} catch (err) {
    		alert (err);
    	}
    }
}