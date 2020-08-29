import React, { Component } from 'react';
import './RatingForm.css';
import { Link } from 'react-router-dom'
import { addMovieRating, getAllUserRatings, removeRating } from '../NetworkRequests/APIRequests'

class RatingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInput: 0,
    }
    this.updateForm = this.updateForm.bind(this)
  }

  updateForm(event) {
    const rating = event.target.value;
    this.setState({ formInput: parseInt(rating) })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await addMovieRating(this.props.userId, this.props.foundMovieId, this.state.formInput)
    await getAllUserRatings(this.props.userId)
      .then(this.props.updateUserRating())
  }

  render() {
    // console.log(this.props)
    return (
      <div className="RatingForm">

      <div className="RatingForm-rating-sec">
        {(!this.props.isLoggedIn &&
          <>
            <h2>User Reviews</h2>
            <p>{this.props.userRating}</p>
            <Link to='/login'>Login</Link>
          </>
        )}
        
            {/* <div> */}

        {(this.props.isLoggedIn && this.props.userRating.includes(`You rated this movie`) &&
          <>
            <h2>{this.props.userRating}</h2>
            <form onSubmit={this.handleSubmit} className='RatingForm-form'>
              <div>
                  <select value={this.state.formInput} onChange={this.updateForm} className='RatingForm-dropdown'>
                    {['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number} value={number}>{number}</option>)}
                  </select>
                  <h2 className="RatingForm-rating-text">/10<span role="img" aria-label="Star Emoji">⭐</span></h2>
                </div>
              <input type='submit' value='Edit Your Rating' className="RatingForm-button"/>
            </form>
            {/* <button onClick={this.deleteRating}>Edit Rating</button> */}
          </>
        )}
            {/* </div> */}
        {(this.props.isLoggedIn && this.props.userRating === 'You haven\'t rated this movie yet' &&
          <>
            <h2>Review {this.props.movie.title}</h2>
            <div className="RatingForm-submit-sec">
              <form onSubmit={this.handleSubmit} className='RatingForm-form'>
                <textarea className="RatingForm-comment-form" rows="30" cols="20" wrap="hard" maxLength="350" placeholder="What did you think of this movie? (optional)"></textarea>
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
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
          <div className="RatingForm-comment-cards">
            <p>This is a paragraph to test the comment section of the page. This is where someone would leave there rating for this movie.</p>
          </div>
        </div>


      </div>

      </div>

    )
  }
}

export default RatingForm
