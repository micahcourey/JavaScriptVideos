import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAOOQQAVUa5bIcsWq59ayH9gZDB5XDZrRQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'wakesurf'}, (videos ) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'))
