/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';
import Footer from './../footer/index';
import {
  ProfileItem,
  ProfileSection,
  ProfileList,
  ProfileTitle,
  Span,
  SpanParent_1,
  SpanParent_2,
  SpanParent_3,
  StitleSpan,
  SpanWeb,
  Skills,
  SkillsDesc,
  SkillTitle,
  Bar,
  TitleBar,
  Parent,
  Perc,
  PtitleSpan,
  ProfileSkills
 

} from './style.js';
class Profile extends Component {
    state ={
        skills:[]
    }
    componentDidMount(){
    axios.get("js/data.json").then((res)=>{
        this.setState({
            skills:res.data.skills
        })
        console.log(res)
       
    })
    }
  render() {
      const {skills} = this.state;
      const arraySkills = skills.map((skill)=>{
          return(
            <Bar key={skill.id}>
            <TitleBar>{skill.title}</TitleBar>
            <Perc>{skill.percentage}</Perc>
            <Parent>
              <SpanParent_1></SpanParent_1>
            </Parent>
          </Bar>
          )
      })
    return (
      <div>
      <ProfileSkills>
        <div className="container">
          <ProfileSection>
            <ProfileTitle>
              <PtitleSpan>My </PtitleSpan>Profile
            </ProfileTitle>
            <ProfileList>
              <ProfileItem>
                <Span>Name</Span>
                Hamza Nabil
              </ProfileItem>
              <ProfileItem>
                <Span>Birthday</Span>
                21/1/1996
              </ProfileItem>
              <ProfileItem>
                <Span>Address</Span>
                Ain shams
              </ProfileItem>
              <ProfileItem>
                <Span>Phone</Span>
                4444 5555 6666
              </ProfileItem>
              <ProfileItem>
                <Span>Email</Span>
                hamza@hamza.com
              </ProfileItem>
              <ProfileItem>
                <Span>Website</Span>
                <SpanWeb >www.google.com</SpanWeb>
              </ProfileItem>
            </ProfileList>
          </ProfileSection>

          <Skills>
            <SkillTitle>
              Some <StitleSpan>skills</StitleSpan>
            </SkillTitle>
            <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
            {/* <Bar>
              <TitleBar>Bootstrap</TitleBar>
              <Perc>100%</Perc>
              <Parent>
                <SpanParent_1></SpanParent_1>
              </Parent>
            </Bar>

            <Bar>
              <TitleBar>CSS3</TitleBar>
              <Perc>90%</Perc>
              <Parent>
                <SpanParent_1></SpanParent_1>
              </Parent>
            </Bar>

            <Bar>
              <TitleBar>Photoshop</TitleBar>
              <Perc>80%</Perc>
              <Parent>
                <SpanParent_3></SpanParent_3>
              </Parent>
            </Bar> */}
            {arraySkills}
          </Skills>
        </div>
      </ProfileSkills>
      <Footer/>
      </div>
    );
  }
}
export default Profile;
