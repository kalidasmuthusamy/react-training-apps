// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");
require("./index.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import NewsSourcesLister from './App.jsx';

ReactDOM.render(<NewsSourcesLister />, document.getElementById('react-root'));
