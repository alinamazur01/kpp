const API_KEY = '6448d29fd763a3d0e266d0100b828aa4';

const mapConfig = {
	center: { lat: 48, lng: 31 },
	zoom: 6
};

const Locations = [
	{
		lat: 49.233083,
		lng: 28.4682169
	},
	{
		lat: 50.4501,
		lng: 30.5234
	},
	{
		lat: 49.58826699999999,
		lng: 34.5514169
	},
	{
		lat: 49.839683,
		lng: 24.029717
	},
	{
		lat: 46.482526,
		lng: 30.7233095
	},
	{
		lat: 44.61665,
		lng: 33.5253671
	},
	{
		lat: 48.015883,
		lng: 37.80285
	}
];

class ApiService {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	async getWeaterByCityName(city, country) {
		const q = country ? `${city},${country}` : city;
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${this.apiKey}`);

		return await response.json();
	}

	async getWeaterByPosition(position) {
		const { lat, lng } = position;
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.apiKey}`
		);

		return await response.json();
	}

	getWeatherIconLink(iconCode) {
		return `http://openweathermap.org/img/w/${iconCode}.png`;
	}
}

class MapService {
	constructor(map) {
		this.map = map;
	}

	addMarker(position, options = {}) {
		return new google.maps.Marker({
			position,
			map: this.map,
			...options
		});
	}
}

const main = async () => {
	const map = new google.maps.Map(document.getElementById('map'), mapConfig);

	const apiService = new ApiService(API_KEY);
	const mapService = new MapService(map);

	for (const position of Locations) {
		const data = await apiService.getWeaterByPosition(position);
		const weather = data.weather[0];

		const infowindow = new google.maps.InfoWindow({
			content: weather.description
		});

		const icon = apiService.getWeatherIconLink(weather.icon);
		const options = { icon, title: weather.main };

		const marker = mapService.addMarker(position, options);

		google.maps.event.addListener(marker, 'click', () => {
			infowindow.open(map, marker);
		});
	}
};

main();
