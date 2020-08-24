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
    this.setState({ formInput: parseInt(rating) })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    addMovieRating(this.props.props.userId, this.props.props.foundMovieId, this.state.formInput)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Review</h4>
        <select value={this.state.formInput} onChange={this.updateForm}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => <option value={number}>{number}</option>)}
        </select>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default RatingForm
