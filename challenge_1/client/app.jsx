import React from 'react';
import axios from 'axios';

import Events from './events.jsx';
import Pagination from './pagination.jsx';
import SearchBar from './searchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      events: [],
      page: 1,
      query: ''
    }

    this.getData = this.getData.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
  }

  getData() {
    axios.get(`/events?q=${this.state.query}&_page=${this.state.page}`)
      .then(response => {
        this.setState({
          count: Number(response.headers['x-total-count']),
          events: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  nextPage(data) {
    this.setState({
      page: data.selected ++
    },this.getData);
  }

  updateQuery(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Historical Events Search</h1>
        <SearchBar updateQuery={this.updateQuery} getData={this.getData} />
        <Events events={this.state.events} />
        <Pagination nextPage={this.nextPage} count={this.state.count} />
      </div>
    );
  }
};

export default App;
