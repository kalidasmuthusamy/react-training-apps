// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");
require("./index.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import FormReact from './App.jsx';

ReactDOM.render(<FormReact />, document.getElementById('react-root'));
