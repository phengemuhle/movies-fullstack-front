import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchField from './components/SearchField'
import Post from './components/Post'
import Movies from './components/Movies'
import NewMovie from './components/NewMovie'
import { Route } from 'react-router-dom'
// import UsersForm from './components/UsersForm'

class App extends Component {
  constructor(props) {
    super();
    this.state ={
      movieList: [],
      userList:[],
      searched:[],
    }
  }
  // https://hengemuhle-movie-database.herokuapp.com/
  async componentDidMount() {
    let result = await fetch("http://localhost:3000/");
    let data = await result.json();
    console.log("data", data);
    this.setState({
      movieList: data,
      searched: data
    });
  }



  onChangeSearch = event => {
    event.preventDefault();
    const value = event.target.value;
    const movieList = this.state.movieList;
    const filteredSnacks = this.findMatches(value, movieList);
    this.setState({
      searched: filteredSnacks
    });
  };

  chooseMovie(e){
    // console.log('nothing')
  }
  
  findMatches(words, movieList) {
    return movieList.filter(item => {
      const regex = new RegExp(words, "gi");
      return item.title.match(regex) || item.main_characters.match(regex);
    });
  }
  render() {
    return (
      <div className="App">
          <Header />
          <div className="topnav">
            <SearchField searched={this.state.searched} onChangeSearch={this.onChangeSearch} />
          </div>
          <div className="postAndMovieCont">
          {/* <Route path='/' exact render={() => <}/> */}
            <Route path='/movies' render={() => <Movies chooseMovie={this.chooseMovie} searched={this.state.searched}/>}/>
            <Route path='/post' render={() => <Post/>}/>
            <Route path='/newMovie/id/:id' render={(props) => <NewMovie {...props} {...this.state} searched={this.state.searched}/>}/>
          {/* <div className="formCont"> */}
            {/* <UsersForm/> */}
          {/* </div> */}
          </div>
      </div>
    );
  }
}

export default App;
