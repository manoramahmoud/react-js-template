/* eslint-disable no-unused-vars */
import React from "react";
// import './style.js'
import{HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, Span , HOmeBtn} from'./style'
const Home = ()=>{
    return(
        <div>
               <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle >Manar Mahmoud</HomeTitle>
                    <HomeInfo >Creative Director</HomeInfo>
                    <HomeDesc >
                        Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
                    </HomeDesc>
                    <HOmeBtn >Let's Begin</HOmeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
        </div>
    )
}
export default Home;