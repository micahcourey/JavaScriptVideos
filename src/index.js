import React from 'react'
import ReactDom from 'react-dom'

// Create a new component. This component should product some HTML
const App = () => {
  return <div>Yo sup React?!?!?</div>;
}

// Take this components generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'))
