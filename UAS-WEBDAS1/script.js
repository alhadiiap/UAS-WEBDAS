let getInput=document.querySelector(".search input");
let getConfirm=document.querySelector(".data-result .total-case h2");
let getRecovered=document.querySelector(".data-result .recover h2");
let getDeath=document.querySelector(".data-result .death h2");
let update=document.querySelector(".data-result .total-case");
let getCountry=document.querySelector(".to-render h4");
getInput.addEventListener("keypress",function(e){
	if(e.keyCode==13){
		let countryName=e.target.value;
		fetch(`https://covid-19-data.p.rapidapi.com/country?name=${countryName}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
				"x-rapidapi-key": "8e77efeeaamsh6718fd2ddf40f30p1fc783jsnf24246400435"
			}
		})
		.then(response => response.json())
		.then(response=>{
			console.log(response)
			getConfirm.textContent=response[0].confirmed;
			getRecovered.textContent=response[0].recovered;
			getDeath.textContent=response[0].deaths;
			getCountry.textContent=response[0].country;
		});
	}
})

