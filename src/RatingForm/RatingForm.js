import React from 'react';
import './RatingForm.css';

const RatingForm = () => {
  return (
    <form>
      <h4>Add Review</h4>
      <select>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
      </select>
      <button onClick={console.log('Added Review!')}>Submit</button>
    </form>
  )
}

export default RatingForm
