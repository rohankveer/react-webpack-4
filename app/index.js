import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
require('./main.scss');

const App = () => {
  return <div>Hello React,Webpack 4 & Babel 7!</div>;
};

ReactDOM.render(<App />, document.getElementById('eui-app-container'));