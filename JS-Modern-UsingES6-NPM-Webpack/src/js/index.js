import axios from 'axios';

// https://www.food2fork.com/api/search

async function getResults(query) {
	const key = '36d561b9fe597511d1bb317b56c8717d';
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	
	const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
	
	console.log(result);
	
}

getResults('tuna');