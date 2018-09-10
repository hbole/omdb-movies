import React,{Component} from 'react';
import back from './back.png'
import './MovieDetails.css';
const Loading=()=>{
  return(
    <div className="lds-roller load">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
}
class MovieDetails extends Component{
	constructor(props){
		super();
		this.state={
			movie:'',
		}
	}
	onBackClick=()=>{
		this.setState({movie:''});
		this.props.onRouteChange('searchpage');
	}
	componentDidMount() {
		const key='135640ce';
        fetch(`https://omdbapi.com/?i=${this.props.id}&apikey=${key}`)
        .then(res => {
            res.json()
            .then(data => {
                this.setState({movie:data});
                this.props.onShowHistory(data.Poster,data.Title);
            })
        }).catch(err => {
            console.log(err);
            this.setState({movie:''});
        })
    }
	render(){
		const movie=this.state.movie;
		if(!movie){
			return(<Loading />);
		}
		const scores = this.state.movie.Ratings.map((score, id) => {
            return (
                <li className='collection-item' key={id}>
                    <span className='red fl text mr2'>{score.Source}:</span> {score.Value}
                </li>
            );
        })
        const poster = this.state.movie.Poster !== 'N/A' ? 
            <img src={this.state.movie.Poster} alt={this.state.movie.Poster} className='h-90 mt3  ml2 ba br3' style={{width:'auto'}}/> :
            <h4>There is no poster available for this film</h4>;
        const plot = this.state.movie.Plot !== 'N/A' ? this.state.movie.Plot : '';
		return(
			<div>
				<div>
					<h1>{movie.Title}</h1>
					<p>{plot}</p>
				</div>
				<div>
					<div className='fl w-20 ml7'>{poster}</div>
					<div className='fr w-50 ml5 mr4 mt2'>
                        <ul className='opaque br3 pa3 mr7 border text tl'>
                            <li className='collection-item'>
                                <span className='red fl text mr2'>Released:</span> {movie.Released}
                            </li>
                            <li className='collection-item'>
                                <span className='red fl text mr2'>Genre:</span> {movie.Genre}
                            </li>
                            <li className='collection-item'>
                                <span className='red fl text mr2'>Rating:</span> {movie.Rated}
                            </li>
                            <li className='collection-item'>
                                <span className='red fl text mr2'>Length:</span> {movie.Runtime}
                            </li>
                            <li className='collection-item'>
                                <span className='red fl text mr2'>Director(s):</span>{movie.Director}
                            </li>
                            <li className='collection-item'>
                                <span className='red fl mr2'>Actors:</span> {movie.Actors}
                            </li>
                        </ul>
                        <div className=''>
		                    <p className='bg-transparent text tl'>Ratings</p>
		                    <ul className='pa3 mr7 text opaque br3 border tl'>
		                        {scores}
		                    </ul>
                        </div>   
                    </div>
				</div>
				<div className='mt3 mr6'>
				<button type='button' onClick={this.onBackClick} className='bg-transparent ba br3 w-10 fr mr5 pr3 pl2 mt3'>
					<img src={back} alt='backbutton' className='icon'/>
					<p className='mt3'>Back</p>
				</button>
				</div>
			</div>
		);
	}
}
export default MovieDetails;