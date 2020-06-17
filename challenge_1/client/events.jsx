import React from 'react';
import Entry from './entry.jsx';

const Events = ({events}) => {
  return (
    <div>
      {events.map(event => <Entry event={event}/>)}
    </div>
  );
};

export default Events;