import React from 'react';

const RatingForm = () => {
  return (
    <form>
      <h3>Add Review</h3>
      <input
        type='number'
        min='1'
        max='10'
        placeholder='Your review'
        name='ratingForm'
      />
      <button onClick={console.log('Added Review!')}>Submit</button>
    </form>
  )
}

export default RatingForm
