var Data = {
	projectsList: [
		{
			id: 'movies',
			title: 'Movie trailers website',
			img: 'static/img/movies.jpg',
			video: 'static/videos/movies-demo.webm'
		}, {
			id: 'portfolio',
			title: 'Previous version of this site',
			img: 'static/img/portfolio.jpg',
			video: 'static/videos/portfolio-demo.webm'
		}
	],
	
	// Create lists for each units grid to keep track of their index
	unitsLeft: [],
	unitsRight: [],
	unitsTop: [],
	unitsBottom: [],

	// Shsdes specter for animations
	shades: ['#cccccc', '#d1d1d1', '#d8d8d8', '#dfdfdf', '#e5e5e5', '#ededed', '#f2f2f2', '#f8f8f8', '#ffffff']
}