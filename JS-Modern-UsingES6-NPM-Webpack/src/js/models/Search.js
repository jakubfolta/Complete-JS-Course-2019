import axios from 'axios';


export class Search {
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

export const markHoliday = {
    bills: [770, 35, 11, 45],
    calcTip: function() {
        this.tips = [];
        this.finalAmount = [];

        for (var i = 0; i < this.bills.length; i++) {

            // Determine the value of percentage
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = Number((bill * percentage).toFixed(2));
            this.finalAmount[i] = bill + this.tips[i];
        }
    }
}
