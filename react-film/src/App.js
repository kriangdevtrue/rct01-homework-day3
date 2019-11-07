import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const { films } = TMDB;

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      films: films,
      faves: [],
      current: {},
      isFave: false
    }
  }

  handleFaveToggle = film => {
    let faves = [...this.state.faves];
    const filmIndex = faves.indexOf(film);
    if(filmIndex>-1){
      console.log(`Removing ${film} from faves...`);
      faves.splice(filmIndex, 1);
    }else{
      console.log(`Adding ${film} to faves...`);
      faves.push(film);
    }
    this.setState({faves});
  }

  handleDetailsClick = film => {
    console.log(`Fetching details for`, film);
    this.setState({ current: film });
  }

  render() {
    return (
      <div className="film-library">
        <FilmListing 
          films={films} 
          faves={this.state.faves} 
          onFaveToggle={this.handleFaveToggle}
          onDetailClick={this.handleDetailsClick}
        />
        <FilmDetails films={this.state.current} />
      </div>
    );
  }
}

export default App;
