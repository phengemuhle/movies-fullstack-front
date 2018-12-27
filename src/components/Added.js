import React from "react"
import { Link } from "react-router-dom"


const Deleted = (props) => {
    return(
        <div className="deleteCont">
            <h1 className="headerText" >You Have added the Movie!!</h1>
            <Link to={`/movies`}> <button className="backButton" >Back</button> </Link>
        </div>
    )
}
export default Deleted