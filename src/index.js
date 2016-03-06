import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAOOQQAVUa5bIcsWq59ayH9gZDB5XDZrRQ';

// Create a new component. This component should product some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this components generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))
