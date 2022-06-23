/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import Footer from './../footer/index';

import {
  Worksection,
  WorkTitle,
  Span,
  WorkPort,
  Icon,
  PartTime,
  PartDesc,
  Line,
} from './style';

class Work extends Component {
  state = {
    work: [],
  };
  componentDidMount() {
    axios.get('js/data.json').then((res) => {
      this.setState({
        work: res.data.works,
      });
    });
  }

  render() {
    const { work } = this.state;
    const workLists = work.map((workItem) => {
      return (
        <WorkPort first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTime>{workItem.title}</PartTime>
          <Line />
          <PartDesc>{workItem.body}</PartDesc>
        </WorkPort>
      );
    });

    return (
      <div>
        <Worksection>
          <div className="container">
            <WorkTitle>
              <Span>My</Span> Work
            </WorkTitle>
            {workLists}
          </div>
        </Worksection>
        <Footer />
      </div>
     
      
    );
  }
}
export default Work;
