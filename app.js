// ------------------------------------------------------
// Studio Ghibli Film Database
// ------------------------------------------------------

const getGhibliData = () => {

		const apiCall = `https://ghibliapi.herokuapp.com/films`;
	
		fetch(apiCall)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				const title = data[0].title
				main.innerHTML = `<h3>${title}</h3>`
	;})
	};

	
getGhibliData()