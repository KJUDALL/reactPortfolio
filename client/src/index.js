// Step 1. Base level of app
import './styles.css'; // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);