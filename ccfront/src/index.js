import React from 'react';
import ReactDOM from 'react-dom/client';  // Importing ReactDOM from 'react-dom/client' for React 18+
import './index.css';  // Importing your styles
import App from './App';  // Importing the root component of your app

// Create a root for React 18 and render the App inside the root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component inside the root DOM node
root.render(
    <React.StrictMode>
        <App />  {/* Your main application */}
    </React.StrictMode>
);
