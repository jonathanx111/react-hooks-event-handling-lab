import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

function handleChange() {
  console.log("Entering password...")
}

function handleFocus() {
  console.log("Good!")
}

function handleBlur() {
  console.log("Hey! Eyes on me!")
}

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root')
);
