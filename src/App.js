import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import SearchField from './components/SearchField'
import Post from './components/Post'
import Movies from './components/Movies'
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

  async componentDidMount() {
    let result = await fetch("https://hengemuhle-movie-database.herokuapp.com/");
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
  
  findMatches(words, movieList) {
    return movieList.filter(item => {
      const regex = new RegExp(words, "gi");
      return item.title.match(regex) || item.name.match(regex);
    });
  }
  render() {
    return (
      <div className="App">
          <Header />
          <div className="topnav">
            <SearchField searched={this.state.searched} onChangeSearch={this.onChangeSearch} />
          </div>
          {/* <div className="formCont">
            <UsersForm/>
          </div> */}
          <div className="postAndSnackCont">
            <div className="snackCont"> 
              <Movies searched={this.state.searched}/>
            </div>
            <div className="postCont">
              <Post/>
            </div>
          </div>

      </div>
    );
  }
}

export default App;
