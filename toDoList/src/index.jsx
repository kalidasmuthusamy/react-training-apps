// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './App.jsx';

ReactDOM.render(<ToDoList />, document.getElementById('react-root'));
