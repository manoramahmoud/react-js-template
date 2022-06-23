/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../footer/index.js";
import {AboutSection, AboutInfo, Anchor, InfoTitle, Span, InfoDir, InfoDesc} from'./style.js'


const About = ()=>{
    return(
        <div>
        <AboutSection>
        <div className="container">
            <AboutInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
              
            </AboutInfo>
        </div>
    </AboutSection>
    <Footer/>
    </div>
    )
}
export default About;