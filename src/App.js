import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import SearchField from "./components/SearchField"
import Post from "./components/Post"
import Movies from "./components/Movies"
import NewMovie from "./components/NewMovie"
import LogInPage from "./components/LogInPage"
import Scroll from "./components/Scroll"
import AddMovie from "./components/AddMovie" 
import Deleted from "./components/Deleted"
import Added from "./components/Added"
import EditMovie from "./components/EditMovie"
import { Link } from "react-router-dom"
import { Route } from "react-router-dom"

class App extends Component {
  constructor(props) {
    super();
    this.state ={
      movieList: [],
      userList:[],
      searched:[],
      userName:"",
      movieRatings:0,
      movieReview:"",
      title: "",
      director: "",
      description : "",
      characters : "",
      year: 0,
      rating: 0,
      review:"",
      poster:"",
      id:0,
      selectedId: 0
    }
  }
  fullLoad = () => {
    fetch("https://hengemuhle-movies-db.herokuapp.com/")
    .then(result => result.json())
    .then((data) => {
      this.setState({
        movieList: data,
        searched: data
      });
    })
  }

  async componentDidMount() {
    this.fullLoad()
  }
  
  selectMovie = (id) => {
    this.setState({
      selectedId: id
    })
  }
  
  deleteMovie =  (id) => {
    console.log(id)
    fetch(`https://hengemuhle-movies-db.herokuapp.com/movies/${id}`, {
      method:'DELETE',
    }).then(()=> this.fullLoad())
  }

  deleteReview= (movie) => {
    var ratedMovie = {
      title: movie.title,
      rating: 0,
      year: movie.year,
      director: movie.director,
      characters: movie.characters,
      description: movie.description,
      review: "",
      poster: movie.poster
    }
    fetch(`https://hengemuhle-movies-db.herokuapp.com/movies/${movie.id}`, {
      method:'PUT',
      body: JSON.stringify(ratedMovie),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=utf - 8'
      }
    }).then(()=> this.fullLoad())
  }

  rateMovie = (movie) => {
    var ratedMovie = {
      title: movie.title,
      rating: this.state.movieRatings,
      year: movie.year,
      director: movie.director,
      characters: movie.characters,
      description: movie.description,
      review: this.state.userName + " says: " +this.state.movieReview,
      poster: movie.poster
    }
    fetch(`https://hengemuhle-movies-db.herokuapp.com/movies/${movie.id}`, {
      method:'PUT',
      body: JSON.stringify(ratedMovie),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=utf - 8'
      }
    }).then(()=> this.fullLoad())
  }

  addMovie = async () => {
    var new_Movie = {
      title: this.state.title,
      rating: this.state.rating,
      year: this.state.year,
      director: this.state.director,
      characters: this.state.characters,
      description: this.state.description,
      poster:this.state.poster
    }
    await fetch('https://hengemuhle-movies-db.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify(new_Movie),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; charset=utf - 8'
      }
    }).then(() => this.fullLoad())
  }

  handelInput =(event) => {
    const { value , id } = event.target
    this.setState({
      [id]: value
    })
  }

  onChangeSearch = event => {
    event.preventDefault();
    const value = event.target.value;
    const movieList = this.state.movieList;
    const filteredMovies = this.findMatches(value, movieList);
    this.setState({
      searched: filteredMovies
    });
  };

  findMatches(words, movieList) {
    return movieList.filter(item => {
      const regex = new RegExp(words, "gi");
      return item.title.match(regex) || item.characters.match(regex);
    });
  }
  render() {
    return (
      <div className="App">
          <Scroll/>
          <Header />
          <div className="topnav">
            <Link to={`/movies`}> <button className="backButton" >Back</button> </Link>
            <Link to={`/addMovie`}> <button className="addMovieButton" >Add New Movie Info</button> </Link>
            <SearchField searched={this.state.searched} onChangeSearch={this.onChangeSearch} />
          </div>
            <Route path="/" exact render={() => <LogInPage/>}/>
          <div className="postAndMovieCont">
            <Route path="/deleted" render={() => <Deleted/>}/>
            <Route path="/added" render={() => <Added/>}/>
            <Route path="/movies" render={() => <Movies searched={this.state.searched}/>}/>
            <Route path="/post" render={() => <Post rateMovie={this.rateMovie} handelInput={this.handelInput} />}/>
            <Route path="/newMovie/id/:id" render={(props) => <NewMovie selectMovie={this.selectMovie} deleteMovie={this.deleteMovie} {...props} {...this.state} searched={this.state.searched} rateMovie={this.rateMovie} deleteReview={this.deleteReview} handelInput={this.handelInput} />}/>
            <Route path="/addMovie" render={() => <AddMovie addMovie={this.addMovie} handelInput={this.handelInput} />}/>
            <Route path="/editMovie/:id" render={() => <EditMovie editMovie={this.editMovie} handelInput={this.handelInput} />}/>
          </div>
      </div>
    );
  }
}

export default App;
