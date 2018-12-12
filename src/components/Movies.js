import React from 'react'
import { Link } from 'react-router-dom'

const Movies = (props) => {
    
    var movieList = props.searched.map(item => { 
        // var average = item.rating.reduce((a, b) => ((a + b)/item.rating.length +1), 0)
        return(
            <button id={item.id} type="button" onClick={props.chooseMovie} className="moviesCont">
                <Link to={`/newMovie/id/${item.id}`}>
                    <div className="moviesEach">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="imgcont">   
                        <img className="imgThumb" src={item.poster} alt="hookers"></img>
                    </div>
                    <div className="moviesInfo">
                        <h3>Rating: {item.rating} </h3>
                        <h3>Director: {item.director} </h3>
                        <h3>Main Character:</h3> 
                        <p>{item.main_characters}</p> 
                    </div>
                </Link>
            </button>
        )
    })
    return(
        <div className = "movieList"> 
            { movieList }
        </div>
    )
}
export default Movies