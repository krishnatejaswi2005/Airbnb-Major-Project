mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v12",
	zoom: 10,
	center: listing.geometry.coordinates,
});
const marker = new mapboxgl.Marker({ color: "#fe424d" })
	.setLngLat(listing.geometry.coordinates)
	.setPopup(
		new mapboxgl.Popup({ offset: 25 }).setHTML(
			`<h5 style="font-family: 'Plus Jakarta Sans', sans-serif;">${listing.location}</h5><p style="font-family: 'Plus Jakarta Sans', sans-serif;font-size: 0.6rem"><i>Exact Location provided after booking!</i></p>`
		)
	)
	.addTo(map);
