import React from "react"

const Post = (props) => {
    console.log("post props", props)
    return(
        <div className="postCont">
            <form className =" formWidth">
                <div className="form-group postNameCont">
                    <label for="userName">UserName</label>
                    <input type="text" onChange={props.handelInput} className="form-control postNameInput" id="userName" placeholder="Look-At-My-Cool-User-Name"/>
                </div>
                <div className="form-group postRatingCont">
                    <label for="movieRatings">Rating</label>
                    <select onChange={props.handelInput} className="form-control" id="movieRatings">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group postReviewCont">
                    <label for="movieReview">Review</label>
                    <textarea onChange={props.handelInput} className="form-control reviewBox" id="movieReview" rows="5"></textarea>
                </div>
            </form>
            <button onClick={() => props.rateMovie(props.selectedMovie)} id={props.selectedMovie.id} className="submitReviewButton" type="submit" >Submit Review</button>
        </div>
    )
}
export default Post