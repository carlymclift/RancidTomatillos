import React, { Component } from 'react';
import './RatingForm.css';
import { addMovieRating, getAllUserRatings } from '../NetworkRequests/APIRequests'

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
    await addMovieRating(this.props.props.userId, this.props.props.foundMovieId, this.state.formInput)
    await getAllUserRatings(this.props.props.userId)
      .then(this.props.props.updateUserRating())
  }

  render() {
    return (
      <div className="RatingForm-rating-sec">
        <div className="RatingForm-submit-sec">
          <form onSubmit={this.handleSubmit} className='RatingForm-form'>
            <h4>Add Review</h4>
            <select value={this.state.formInput} onChange={this.updateForm} className='RatingForm-dropdown'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option key={number} value={number}>{number}</option>)}
            </select>
            <input type='submit' value='Submit' />
          </form>
          <form>
            <textarea className="RatingForm-comment-form" rows="30" cols="20" wrap="hard" maxlength="350">
            </textarea>
          </form>
        </div>
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
        </div>
      </div>
    )
  }
}

export default RatingForm
