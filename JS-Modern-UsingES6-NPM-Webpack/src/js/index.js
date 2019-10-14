import axios from 'axios';

async function getResultsRecipes(query) {
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

getResultsRecipes('tuna');

async function getResults(query) {
	const key = '011dd9b62094380079400d494066f431';
	const proxy = 'https://cors-anywhere.herokuapp.com/';
	
	try{
		const result = await axios(`${proxy}https://chicken-coop.p.rapidapi.com/games?title=${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "chicken-coop.p.rapidapi.com",
		"x-rapidapi-key": "c39604baadmshcabd6e32bb7d9c0p1e3b1fjsnb9154a318acd"
	}
})
		console.log(result);
	} catch(err) {
		console.log(err);
	}
}

getResults('witcher');