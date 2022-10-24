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
	;})
	};

	
getGhibliData()

const loopData = () => {

	let apiCall = `https://ghibliapi.herokuapp.com/films`;

	fetch(apiCall)
		.then(response => response.json())
		.then(data => {
			for(let i = 0; i < data.length; i++) {
				let obj = data[i];
			
				console.log(obj.title);
			}
			
;})
};

loopData()

