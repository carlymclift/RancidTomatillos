import React, { Component } from 'react';
import './RatingForm.css';
import shortid from 'shortid'
import { Link } from 'react-router-dom'
import CommentCard from '../CommentCard/CommentCard'
import { addMovieRating, getAllUserRatings, removeRating, addMovieComment, getMovieComments } from '../NetworkRequests/APIRequests'

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: '',
      comment: '',
      postedComment: '',
      isRatedSinceLogin: false,
      error: '',
      userRating: '',
      userRatingObj: {}
    }
    this.updateRatingState = this.updateRatingState.bind(this)
    this.deleteRating = this.deleteRating.bind(this)
    this.updateCommentState = this.updateCommentState.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.findUserRatingsForFoundMovie = this.findUserRatingsForFoundMovie.bind(this);
  }

  async componentDidMount() {
    try {
      let commentsFromUsers = await getMovieComments(this.props.foundMovieId)
      let comment = commentsFromUsers.comments.find(comment => comment.author === this.props.userName)

      if (comment !== undefined) {
        this.setState({ postedComment: comment.comment })
      }
    } catch (error) {
      this.setState({error: error})
    } 
    this.findUserRatingsForFoundMovie()
  }

  updateRatingState(event) {
    const rating = event.target.value;
    this.setState({ formInput: parseInt(rating) })
  }

  updateCommentState(event) {
    const comment = event.target.value
    this.setState({ comment: comment })
  }

  findUserRatingsForFoundMovie() {
    const userRating = this.props.userRatings.ratings.find(rating => {
      return this.props.foundMovieId === rating.movie_id
    })
    if (userRating === undefined && this.props.isLoggedIn) {
      this.setState({userRating: 'You haven\'t rated this movie yet'})
    } else if (!this.props.isLoggedIn) {
      this.setState({userRating: 'Log in to rate this movie'})
    } else {
      this.setState({userRating: `Your rating: ${userRating.rating}/10`, userRatingObj: userRating})
    }
  }

  submitRating = async (event) => {
    event.preventDefault();
    if (this.state.formInput === '' && this.state.comment.length > 1) {
      await addMovieComment(this.props.foundMovieId, this.state.comment, this.props.userName)
      this.findUserCommentFromComments()
    } else if (this.state.comment.length > 1 && this.state.formInput !== '') {
      await addMovieComment(this.props.foundMovieId, this.state.comment, this.props.userName)
      let comment = this.findUserCommentFromComments()
      this.setState({ postedComment: comment.comment })
      this.submitRatingNumber(event)
    } else if (this.state.comment === '' && this.state.formInput !== '') {
      this.submitRatingNumber(event)
    } else {
      alert(`Please select a rating or comment on ${this.props.movie.title} to submit a review.`)
    }    
  }

  findUserCommentFromComments = async () => {
    let comments = await getMovieComments(this.props.foundMovieId)
    let foundComment = comments.comments.find(comment => comment.author === this.props.userName)
    this.setState({ postedComment: foundComment.comment })
    return foundComment
  }

  submitRatingNumber = async (event) => {
    event.preventDefault();
    await addMovieRating(this.props.userId, this.props.foundMovieId, this.state.formInput)
    await getAllUserRatings(this.props.userId)
        .then(this.props.updateUserRating())
    this.setState({ isRatedSinceLogin: true, userRating: `Your rating: ${this.state.formInput}/10`})
  }

  updateMovieRating = async (event) => {
    event.preventDefault()
    await this.deleteRating(event)
    this.submitRatingNumber(event)
  }

  deleteRating(event) {
    event.persist()
    const ratingId = this.state.userRatingObj.id
    removeRating(this.props.userId, ratingId)
  }

  deleteComment() {
    alert('Your comment has been deleted.')
    this.setState({ postedComment: ''})
  }

  render() {
      const commentCards = this.props.allMovieComments.filter(comment => comment.author !== this.props.userName)
        .map(comment => {
        return (<CommentCard {...comment} key={shortid.generate()} />)
      })

    return (
      <div className="RatingForm-rating-sec" aria-label="rating">
        {(!this.props.isLoggedIn &&
          <>
            <h2>User Reviews</h2>
            <p>{this.state.userRating}</p>
            <Link to='/login'>Login</Link>
          </>
        )}
        {(this.props.isLoggedIn && this.state.userRating.includes(`Your rating`) &&
          <>
            <h2>{this.state.userRating}</h2>
            <form onSubmit={this.updateMovieRating} className='RatingForm-form'>
              {( this.state.postedComment === '' &&
                <>
                  <textarea 
                    onChange={this.updateCommentState} 
                    value={this.state.comment} 
                    className="RatingForm-comment-form" 
                    rows="30" 
                    cols="20" 
                    wrap="hard" 
                    maxLength="500" 
                    placeholder="What did you think of this movie? (optional)">
                  </textarea>
                  <button onClick={this.submitRating} className="RatingForm-add-comment-button">Add comment</button>
                </>
              )}
              <div>
                <select value={this.state.formInput} onChange={this.updateRatingState} className='RatingForm-dropdown'>
                  {['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number} value={number}>{number}</option>)}
                </select>
                <h2 className="RatingForm-rating-text">/10<span role="img" aria-label="Star Emoji">⭐</span></h2>
              </div>
              <input type='submit' value='Edit Your Rating' className="RatingForm-button"/>
            </form>
          </>
        )}
        {(this.props.isLoggedIn && this.state.userRating === 'You haven\'t rated this movie yet' &&
          <>
            <h2>Review {this.props.movie.title}</h2>
            <div className="RatingForm-submit-sec">
              <form onSubmit={this.submitRating} className='RatingForm-form'>
              {( this.state.postedComment === '' &&
                  <textarea 
                    onChange={this.updateCommentState} 
                    value={this.state.comment} 
                    className="RatingForm-comment-form" 
                    rows="30" 
                    cols="20" 
                    wrap="hard" 
                    maxLength="500" 
                    placeholder="What did you think of this movie? (optional)">
                  </textarea>
              )}
              {(this.state.isRatedSinceLogin === false &&
                <>
                  <div>
                    <select value={this.state.formInput} onChange={this.updateRatingState} className='RatingForm-dropdown'>
                      {['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number} value={number}>{number}</option>)}
                    </select>
                    <h2 className="RatingForm-rating-text">/10<span role="img" aria-label="Star Emoji">⭐</span></h2>
                  </div>
                  <input type='submit' value='Submit' className="RatingForm-button"/>
                </>
              )}
              {((this.state.isRatedSinceLogin === true && this.state.postedComment === '') &&
                <button onClick={this.submitRating} className="RatingForm-add-comment-button">Add comment</button>
              )}
              </form>   
            </div>
          </>
        )}
        <div className="RatingForm-comment-sec" aria-label="comments">
          {(this.state.postedComment !== '' &&
            <>
              <div className="RatingForm-user-comment">
                <p>You wrote:</p>
                <p>{this.state.postedComment}</p>
                <button onClick={this.deleteComment} className="RatingForm-delete-comment-button">Delete Comment</button>
               </div>
            </>
          )} 
          {commentCards}
        </div>
      </div>
    )
  }
}

export default RatingForm
