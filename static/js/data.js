var Data = {
	projectsList: [
		{
			id: 'movies',
			title: 'Movie trailers website',
			descr: 'The simple website that shows posters of a movies and plays their trailers when poster is clicked',
			img: 'static/img/movies.jpg',
			video: 'static/videos/movies-demo.mp4',
			url: 'https://movie-trailers-webpage.herokuapp.com/'
		},{
			id: 'catalog',
			title: 'The web catalog',
			descr: 'Web catalog with login and upload functionalities and connection to database',
			img: 'static/img/catalog.jpg',
			video: 'static/videos/catalog-demo.mp4',
			url: 'https://itemscatalog.herokuapp.com/'
		}, {
			id: 'map',
			title: 'Map with some markers',
			descr: 'Map with some markers with functionalities of filtering markers by category, searching places by name and retrieving photos and information about them',
			img: 'static/img/map.jpg',
			video: 'static/videos/map-demo.mp4',
			url: 'https://neigh-map.herokuapp.com/'
		}, {
      id: 'portfolio',
      title: 'Previous version of this site',
      descr: 'Previous version of this website. Done with use of HTML and CSS only',
      img: 'static/img/portfolio.jpg',
      video: 'static/videos/portfolio-demo.mp4',
      url: 'https://a-yerkeshev-portfolio.herokuapp.com/'
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