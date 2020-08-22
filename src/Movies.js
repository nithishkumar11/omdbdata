import React from 'react';
import Tilt from 'react-tilt';


const Movies = ({isclicked,detail})=>{
	if(isclicked){
	return(
			<div className =  'pa2 white'>
				<h1>Title:{detail.Title}</h1>
				<Tilt className="Tilt br2 br4 shadow-3 center" options={{ max : 100 }} style={{ height: 'auto', width: 300 }} >
					<div className="Tilt-inner pa2"><img src = {detail.Poster} alt={detail.Title}/></div>
				</Tilt>
				<h3>Year:{detail.Year}</h3>
				<h3>Date:{detail.Released}</h3>
				<h3>Genre:{detail.Genre}</h3>
				<h3>Actors:{detail.Actors}</h3>
				<h3>Language:{detail.Language}</h3>
				<h3>Number of awards:{detail.Awards}</h3>
				<h3>Imdb-Rating:{detail.imdbRating}</h3>
				<h3>BoxOffice-collection:{detail.BoxOffice}</h3>
			    <h2>Main Plot</h2>
			    <h3>{detail.Plot}</h3>
			    
			</div>
		);}
	else{
		return(
			<div> </div>
		);
	}

}
export default Movies;