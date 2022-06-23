/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';

import {
  ContactSection,
  ContactTitle,
  Span,
  Form,
  FormInput,
  Input,
  InputEmail,
  InputExp,
  InputSubmit,
  InputText,
  TextErea,
} from './style.js';
import Footer from '../footer/index.js';
const Contact = () => {
  return (
    <div>
    <ContactSection>
      <div className="container">
        <ContactTitle>
          <Span>Drop </Span>Me A line
        </ContactTitle>
        <Form>
          <FormInput>
            <InputText placeholder="Your Name" />
            <InputEmail placeholder="Your Email" />
          </FormInput>
          <InputExp class="sub" placeholder="Your Subject" />
          <TextErea cols="30" rows="10" placeholder="Your Message"></TextErea>
          <InputSubmit value="Send Message" />
        </Form>
      </div>
      
    </ContactSection>
    <Footer/>
    </div>
    
 
  );
};
export default Contact;
