import React, { Component } from 'react';
import './RatingForm.css';
import shortid from 'shortid'
import { Link } from 'react-router-dom'
import fakeUserComments from '../fakeComments'
import CommentCard from '../CommentCard/CommentCard'
import { addMovieRating, getAllUserRatings, removeRating, addMovieComment, getMovieComments } from '../NetworkRequests/APIRequests'

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: '',
      comment: '',
      postedComment: '',
      allMovieComments: [],
      error: ''
    }
    this.updateForm = this.updateForm.bind(this)
    this.deleteRating = this.deleteRating.bind(this)
    this.updateCommentState = this.updateCommentState.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  async componentDidMount() {
    try {
      let commentsFromUsers = await getMovieComments(this.props.foundMovieId)
      let comment = commentsFromUsers.comments.find(comment => comment.author === this.props.userName)
      console.log(comment)
      if (comment !== undefined) {
        this.setState({ postedComment: comment.comment })
      }
    } catch (error) {
      this.setState({error: error})
    } 
  }

  updateForm(event) {
    const rating = event.target.value;
    this.setState({ formInput: parseInt(rating) })
    console.log(this.state.formInput)
  }

  updateCommentState(event) {
    const comment = event.target.value
    this.setState({ comment: comment })
    console.log(this.state.comment)
    // console.log(this.state.comment.length)
  }

  submitRating = async (event) => {
    event.preventDefault();
    if (this.state.formInput === '' && this.state.comment.length > 1) {
      addMovieComment(this.props.foundMovieId, this.state.comment, this.props.userName)
      this.setState({ postedComment: this.state.comment })
    } else if (this.state.comment.length > 1 && this.state.formInput !== '') {
      addMovieComment(this.props.foundMovieId, this.state.comment, this.props.userName)
      this.setState({ postedComment: this.state.comment })
      this.submitRatingNumber(event)
    } else if (this.state.comment === '' && this.state.formInput !== '') {
      this.submitRatingNumber(event)
    } else {
      alert(`Please select a rating or comment on ${this.props.movie.title} to submit a review.`)
    }
  }

  submitRatingNumber = async (event) => {
    event.preventDefault();
    await addMovieRating(this.props.userId, this.props.foundMovieId, this.state.formInput)
    await getAllUserRatings(this.props.userId)
        .then(this.props.updateUserRating())
  }

  updateMovieRating = async (event) => {
    event.preventDefault()
    await this.deleteRating(event)
    this.submitRatingNumber(event)
  }

  deleteRating(event) {
    event.persist()
    const ratingId = this.props.userRatingObj.id
    removeRating(this.props.userId, ratingId)
  }

  deleteComment() {
    // alert('Your comment has been deleted.')
    this.setState({ postedComment: ''})
  }

  render() {
    const commentsOnMovie = fakeUserComments.filter(comment => {
      return comment.movieId === this.props.foundMovieId
    })
    const commentCards = commentsOnMovie.map(comment => {
      return (<CommentCard {...comment} key={shortid.generate()} />)
    })

    return (
      <div className="RatingForm-rating-sec">
        {(!this.props.isLoggedIn &&
          <>
            <h2>User Reviews</h2>
            <p>{this.props.userRating}</p>
            <Link to='/login'>Login</Link>
          </>
        )}
        {(this.props.isLoggedIn && this.props.userRating.includes(`You rated this movie`) &&
          <>
            <h2>{this.props.userRating}</h2>
            <form onSubmit={this.updateMovieRating} className='RatingForm-form'>
              <div>
                  <select value={this.state.formInput} onChange={this.updateForm} className='RatingForm-dropdown'>
                    {['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number} value={number}>{number}</option>)}
                  </select>
                  <h2 className="RatingForm-rating-text">/10<span role="img" aria-label="Star Emoji">⭐</span></h2>
                </div>
              <input type='submit' value='Edit Your Rating' className="RatingForm-button"/>
            </form>
          </>
        )}
        {(this.props.isLoggedIn && this.props.userRating === 'You haven\'t rated this movie yet' &&
          <>
            <h2>Review {this.props.movie.title}</h2>
            <div className="RatingForm-submit-sec">
              <form onSubmit={this.submitRating} className='RatingForm-form'>
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
                <div>
                  <select value={this.state.formInput} onChange={this.updateForm} className='RatingForm-dropdown'>
                    {['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number} value={number}>{number}</option>)}
                  </select>
                  <h2 className="RatingForm-rating-text">/10<span role="img" aria-label="Star Emoji">⭐</span></h2>
                </div>
                <input type='submit' value='Submit' className="RatingForm-button"/>
              </form>   
            </div>
          </>
        )}
        <div className="RatingForm-comment-sec">
          {(this.state.postedComment !== '' &&
            <>
              <div className="RatingForm-user-comment">
                <p>You Posted:</p>
                <p>{this.state.postedComment}</p>
                <button onClick={this.deleteComment}>Delete Comment</button>
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
