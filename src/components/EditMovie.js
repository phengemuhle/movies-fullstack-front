import React from "react"
import { Link } from "react-router-dom"

const EditMovie = (props) => {
    return (
        <div className="AddMoviePageCont">
            <div className="addNewMovieCont">
                <div className="addMovieTitle">
                    <h2>Please Enter Your Movie Information</h2>
                </div>
                <form>
                    <div className="form-group">
                        <label for="title">Title:</label>
                        <input onChange={props.handelInput} type="text" className="form-control" id="title" placeholder="Aladin"/>
                    </div>
                    <div className="form-group">
                        <label for="rating">Rating:     </label>
                        <select onChange={props.handelInput} className="form-control" id="rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="form-group basicFormat">
                        <label for="year">Year:</label>
                        <input onChange={props.handelInput} type="number" className="form-control" id="year" placeholder="1999"/>
                    </div>
                    <div className="form-group basicFormat">
                        <label for="Director">Director:</label>
                        <input onChange={props.handelInput} type="text" className="form-control" id="director" placeholder="George Lucas"/>
                    </div>
                    <div className="form-group basicFormat">
                        <label for="Characters">Characters:</label>
                        <input onChange={props.handelInput} type="text" className="form-control" id="characters" placeholder="Frodo"/>
                    </div>
                    <div className="form-group basicFormat">
                        <label for="poster">Poster Url:</label>
                        <input onChange={props.handelInput} type="text" className="form-control" id="poster" placeholder="yourimage.com"/>
                    </div>
                    <div className="form-group basicFormat">
                        <label for="description">Description:</label>
                        <textarea onChange={props.handelInput} className="form-control" id="description" rows="8"></textarea>
                    </div>
                </form>
                <Link to={'/added'}><button onClick={props.addMovie} className="addMovieButton">Add Movie To Database</button></Link>
            </div>
        </div>
    )
    
}

export default EditMovie