import React,{Component} from 'react';
import './MovieDetails.css';
class MovieCard extends Component {
	render(){
		const {title,imdbID,year,poster,Api,onDetailsSubmit}=this.props;
		return(
			<div className='dib mt2'>
				<div className='ba dib br3 pa3 ma2 tc grow ba shadow-5' onClick={()=>onDetailsSubmit(imdbID,Api)}>
					<img src={poster} alt={poster} className='poster'/>
					<p className='text center'>{title}</p>
					<p className='text center'>{year}</p>
				</div>
			</div>
		);
	}
}
export default MovieCard;