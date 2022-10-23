// ------------------------------------------------------
// Studio Ghibli Film Search
// ------------------------------------------------------

const searchGhibli = document.getElementById("searchButton");
const ghibliSearch = document.getElementById("ghibliSearch");
const result = document.getElementById("results")


const getGhibliResults = () => {


	const city = ghibliSearch.value;
	const apiKey = ``;
	const apiCall = ``;


	fetch(apiCall)

		.then(response => response.json())
		.then(data => {

			const {temp} = data.list[0].main; 
            const {humidity} = data.list[0].main;
			const {description} = data.list[0].weather[0];

			weatherResults.innerHTML = `

<h3>Search Results</h3>
<button onClick="window.location.reload();" class="newsearch">New Search</button>
`
;})
};

searchGhibli.onclick = function() {
	getGhibliResults();
};
