import axios from 'axios';

async function getResults(query) {
	const key = '36d561b9fe597511d1bb317b56c8717d';
	const proxy = 'https://cors-anywhere.herokuapp.com/';

	try {
	const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);

	const recipes = result.data.recipes;

	console.log(recipes);
	} catch (err) {
		alert (err);
	}
}

getResults('tuna');
