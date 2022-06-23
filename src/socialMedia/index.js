/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Social,
  SocialDesc,
  Socialmedia,
  Span,
  SpanInfo,
  Icon,
} from './style.js';
import axios from 'axios';


class SocialMedia extends React.Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get('js/data.json').then((res) => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const { social } = this.state;
    const displaySocial = social.map((item) => {
      return (
        <Social items={item.id} key={item.id}>
          <Icon className={item.icon}></Icon>

          <SocialDesc>
            <Span>{item.title}</Span>
            <SpanInfo>{item.body}</SpanInfo>
          </SocialDesc>
        </Social>
      );
    });
    return (
      <div>
      <Socialmedia>
        {/* <Social>
          <Icon class="icon fa-brands fa-facebook fa-lg"></Icon>

          <SocialDesc>
            <Span>Follow Me on</Span>
            <SpanInfo>Social Facebook</SpanInfo>
          </SocialDesc>
        </Social> */}
        {displaySocial}
      </Socialmedia>
      
      </div>
     
    );
  }
}
export default SocialMedia;
