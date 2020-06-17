import React from 'react';

const Entry = ({event}) => {
  return (
    <div>
      <h6>{event.date}</h6>
      <p>{event.description}</p>
    </div>
  )
};

export default Entry;