import React from 'react';

const SearchBar = ({updateQuery, getData}) => {
  const handleSubmit = () => {
    event.preventDefault();
    getData();
  };

  return (
    <form>
      <input type="text" onChange={updateQuery} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default SearchBar;