import React, { Component } from 'react';
import search from './search.png';
import clear from './clear.png';
import info from './info.png';
import MovieCard from '../MovieDetails/MovieCard';
import ErrorMessage from '../MovieDetails/ErrorMessage';
import './MovieSearch.css';
const ApiKey='135640ce';
class MovieSearch extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		searchTerm:'',
      year:'',
  		results:[]
  	}
  }
  onInputChange=(e)=>{
  	this.setState({searchTerm:e.target.value});
  }
  onYearChange=(e)=>{
    this.setState({year:e.target.value});
  }
  onSubmit=(e)=>{
  	e.preventDefault();
  	fetch(`https://www.omdbapi.com/?s=${this.state.searchTerm}&y=${this.state.year}&apikey=${ApiKey}`)
  	.then(res=>{
  		res.json().then(data=>{
  			this.setState({results:data.Search});
  		})
  	})
  	this.setState({searchTerm:''});
    this.setState({year:''})
  }
  clear=()=>{
  	this.setState({searchTerm:''});
    this.setState({year:''})
  }
  render() {
    return (
      <div>
        <h1 className='light-gray headtext' >Welcome to OMDb Movie Bar</h1>
        <p className='ptext white'>Search the OMDB movie database for details on a specific movie or enter a general term to discover movies with that query in the title.</p>
        <div>
        	<div>
        		<form className="search-form" onSubmit={this.onSubmit}>
	                <input
	                	onChange={this.onInputChange}
	                    className="pa3 tc w-80 br3 ba bg-transparent b--black-50 white"
	                    placeholder="Enter Movie Name"
	                    value={this.state.searchTerm}
	                    type="text" 
	                    required />
                  <input
                    onChange={this.onYearChange}
                      className="pa3 tc mt3 w-20 br3 ml3 ba bg-transparent b--black-50 white"
                      placeholder="Enter Year"
                      value={this.state.year}
                      type="text" 
                      />
	                <div>
	                	<button type='submit' className='mvibtn ba br1 b--black-50'  >
	                		<img src={search} alt='search-icon' style={{height:19,width:'auto'}} />
	                	</button>
	                	<button type='button' className='mvibtn ba br1 b--black-50' onClick={this.clear} >
	                		<img src={clear} alt='search-icon' style={{height:19,width:'auto'}}/>
	                	</button>
	                	<button type='button' className='mvibtn ba br1 b--black-50' onClick={()=>this.props.onRouteChange('about')}>
	                		<img src={info} alt='search-icon'style={{height:20,width:'auto'}} />
	                	</button>
	                </div>
	            </form>
        	</div>
        	<div>
        		{this.state.results!==undefined?
        			this.state.results.map((movie,id)=>{
        				return(
        					<MovieCard Api={ApiKey} onDetailsSubmit={this.props.onDetailsSubmit} onRouteChange={this.props.onRouteChange} key={id} title={movie.Title} imdbID={movie.imdbID} year={movie.Year} poster={movie.Poster}/>
        				);
        			}):
        			<ErrorMessage />
        		}
        	</div>
        </div>
      </div>
    );
  }
}

export default MovieSearch;
