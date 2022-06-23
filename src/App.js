/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import './App.css';

import Navbar from './navbar/index';

import Contact from './contact/index';

import Index from './index/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Work from './work/index';

import About from './About';
import Protofolio from './protofolio/index';
import Profile from './profile/index';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="/portfolio" element={<Protofolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
       
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
