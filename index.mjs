import fetch from "node-fetch";

const key = "fef26299b5d3cde561a60b2b45790533";
let time = [];
let date = [];

fetch(
	`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&lang=id&units=metric&appid=${key}`
)
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		console.log("Weather Forecast in Jakarta");
		data.list.map((item) =>
			console.log(
				`Time: ${item.dt_txt}, Temperatures (in Celcius): ${item.main.temp}`
			)
		);
	})
	.catch((err) => {
		console.error(err);
	});
