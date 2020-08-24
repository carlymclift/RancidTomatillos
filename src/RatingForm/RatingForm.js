import React, { Component } from 'react';
import './RatingForm.css';
import { addMovieRating } from '../NetworkRequests/APIRequests'

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
    this.setState({ formInput: rating })
  }

  render() {
    return (
      <form>
        <h4>Add Review</h4>
        <select value={this.state.formInput} onChange={this.updateForm}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option value={number}>{number}</option>)}
        </select>
        <button
        onClick={() => addMovieRating(this.props.userId, this.props.movieId, this.state.formInput)}>
          Submit
        </button>
      </form>
    )
  }
}

export default RatingForm
