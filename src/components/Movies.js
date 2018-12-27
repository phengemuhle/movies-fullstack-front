import React from "react"
import Scroll from "./Scroll"
import { Link } from "react-router-dom"

const Movies = (props) => {
    
    var movieList = props.searched.map(item => { 
        return(
            <button id={item.id} type="button" onClick={props.chooseMovie} className="moviesCont">
                <Link to={`/newMovie/id/${item.id}`}>
                    <div className="moviesEach">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="imgCont">   
                        <img className="imgThumb" src={item.poster} alt="hookers"></img>
                    </div>
                    <div className="moviesInfo">
                        <h3>Rating: {item.rating} </h3>
                        <h3>Director: {item.director} </h3>
                        <h3>Main Character:</h3> 
                        <p>{item.characters}</p> 
                    </div>
                </Link>
            </button>
        )
    })
    return(
        <div className = "movieList"> 
        <Scroll/>
            { movieList }
        </div>
    )
}
export default Movies