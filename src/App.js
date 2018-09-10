import React, { Component } from 'react';
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieDetails from './components/MovieDetails/MovieDetails';
import About from './components/About/About';
import History from './components/History/History';
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state={
      route:'searchpage',
      id:'',
      recent:[]
    }
  }
  onShowHistory=(url,title)=>{
    if(this.state.recent.length===5){
      this.state.recent.splice(0,1);
      this.state.recent.push({url,title});
      console.log(this.state.recent)
    }else{
      this.state.recent.push({url,title});
    }
  }
  onDetailsSubmit=(id,key)=>{
    this.setState({id});
    this.onRouteChange('details');
  }
  onRouteChange=(text)=>{
    this.setState({route:text});
  }
  render() {
    return (
      <div className="App">
        {this.state.route==='details'?
          <MovieDetails onRouteChange={this.onRouteChange} id={this.state.id} onShowHistory={this.onShowHistory}/>:
          (this.state.route==='about'?
            <About onRouteChange={this.onRouteChange}/>:
            <div>
              <MovieSearch onRouteChange={this.onRouteChange} onDetailsSubmit={this.onDetailsSubmit} />
              <div>
                <h1>Your Recent History</h1>
                {this.state.recent!==undefined?
                  this.state.recent.map((movie,id)=>{
                    return(
                      <History key={id} title={movie.title} url={movie.url}/>
                    );
                  }):
                  <div></div>
                }
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
