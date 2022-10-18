import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Section from './components/Section';
import Footer from './components/Footer';
import Search from './components/Search';

export { Navbar, Home, Section, Footer, Search }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);