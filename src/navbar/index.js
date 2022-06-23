/* eslint-disable no-unused-vars */
import React from "react";

import { Link } from "react-router-dom";
import {NavbarSection, Logo, LogoText, UlList, ListItem, Ancor} from'./style.js'
import { NavItem } from './style';

const Navbar = ()=>{
    return(
    
      <NavbarSection>
          
          <div className="container">
              
              <Logo>
                  <LogoText className="logo-text">Ultra Profile</LogoText>
              </Logo>
              
             
              
              <UlList>
                  <ListItem><NavItem to="/">Home</NavItem></ListItem>
                  <ListItem><NavItem to="/work">Work</NavItem></ListItem>
                  <ListItem><NavItem to="/portfolio">Portfolio</NavItem></ListItem>
                  <ListItem><NavItem to="/profile">Profile</NavItem></ListItem>
                  <ListItem><NavItem to="/about">About</NavItem></ListItem>
                  <ListItem><NavItem to ="/contact">Contact</NavItem></ListItem>
              </UlList>
              
          </div>
          
      </NavbarSection>
      
     
    )
}
export default Navbar;