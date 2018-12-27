import React from "react"
import { Link } from "react-router-dom"

const LogInPage = () => {
    return (
        <div className="logInPageCont">
            <Link to="/movies"> <button type="button" className="logInButton">Ticket to the Movies</button></Link>
        </div>
    )
    
}

export default LogInPage