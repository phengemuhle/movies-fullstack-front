import React from 'react'

const Movies = (props) => {
    var movieList = props.searched.map(item => { 
        // var average = item.rating.reduce((a, b) => ((a + b)/item.rating.length +1), 0)
        return(
            <div className="moviesCont">
                <div className="moviesLeft">
                    <h3>{item.title}</h3>
                </div>
                <div className="imgcont">   
                    <img className="imgThumb" src={item.poster} alt="hookers"></img>
                </div>
                <div className="moviesRight">
                    <h2>Rating: {item.rating} </h2>
                    <h2>Director: {item.director} </h2>
                    <p>Main Character: {item.main_characters}</p>
                </div>
            </div>
        )
    })
    return(
        movieList
    )
}
export default Movies