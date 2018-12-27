import React from "react"
import Post from "./Post"
import Scroll from "./Scroll"
import { Link } from "react-router-dom"



const SelectedMovie = (props) => {
    console.log(props)
    if(props.movieList.length == 0){
        return(
            <h1>Loading.......</h1>
        )
    }
    var selectedMovie = props.movieList.filter(item => item.id == props.match.params.id) 
    console.log(selectedMovie) 
    return(
        
        <div className="selectedMoviesMain">
            <Scroll/>
            <div className="movieInfoCont">   
                <div className="moviePosterAndButton">
                    <div id={selectedMovie[0].id} className="selectedMoviesCont">
                        <div className="selectedImgCont">   
                            <img className="imgThumb" src={selectedMovie[0].poster} alt="hookers"></img>
                        </div>
                    </div>
                    <Link to={'/deleted'}><button id={selectedMovie[0].id} onClick={(e) => props.deleteMovie(e.target.id)} className="movieDeleteButton">Delete Movie From Database</button></Link>
                </div>    
                <div className="selectedMoviesInfo">
                    <div className="moviesEach">
                        <h1 className="selectedMovieTitle">{selectedMovie[0].title}</h1>
                    </div>
                    <div className="infoSettings"><span className="infoHeader">Rating:</span> {selectedMovie[0].rating} </div>
                    <div className="infoSettings"><span className="infoHeader">Director: </span> {selectedMovie[0].director} </div>
                    <div className="infoSettings"><span className="infoHeader">Main Character: </span>
                        <p>{selectedMovie[0].characters}</p>
                    </div> 
                    <div className="infoSettings"><span className="infoHeader">Description:</span>
                        <p>{selectedMovie[0].description}</p>
                    </div>
                    <div className="infoSettings"><span className="infoHeader">Review:</span>
                        <p>{selectedMovie[0].review}</p>
                        <div className="reviewButton">
                            <button id={selectedMovie[0].id} onClick={() => props.deleteReview(selectedMovie[0])} className="deleteButton">Delete Review</button>
                        </div>
                    </div>
                </div>
            </div>
            <Post rateMovie={props.rateMovie} handelInput={props.handelInput} selectedMovie={selectedMovie[0]} />
        </div>
    )
}
export default SelectedMovie