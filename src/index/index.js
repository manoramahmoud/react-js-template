/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';

import Home from './../Home';
import About from './../About/index';
import Navbar from './../navbar/index';



import SocialMedia from './../socialMedia/index';
import Work from './../work/index';
import Footer from './../footer/index';

import Profile from './../profile/index';
import Protofolio from './../protofolio/index';
import Contact from './../contact/index';

class Index extends Component {
  render() {
    return (
      <div>

        <Home />
        <Work />
        <Protofolio />
        <Profile />
        <About />
        <SocialMedia />
       
        <Footer />
      </div>
    );
  }
}

export default Index;
