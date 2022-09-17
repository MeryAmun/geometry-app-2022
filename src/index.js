import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import GeometryContextProvider from './components/GeometeryContext/GeometryContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GeometryContextProvider>
    <App/>
</GeometryContextProvider>)