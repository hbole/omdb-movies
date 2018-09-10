import React,{Component} from 'react';
import './History.css';
class MovieCard extends Component {
	render(){
		const {url,title}=this.props;
		return(
			<div className='ml7'>
				<div className='dib fl mt2'>
					<div className='ba fl dib br3 pa3 ma2 tc grow ba shadow-5'>
						<img src={url} alt={url} className='poster'/>
						<p className='text center'>{title}</p>
					</div>
				</div>
			</div>
		);
	}
}
export default MovieCard;