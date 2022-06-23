/* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';
import {
  ProtofolioSEction,
  ProtofolioTitle,
  ProtofolioList,
  Span,
  OverlaySpan,
  Img,
  ImageHover,
  ProtofolioItem,
  OverLay,
} from './style.js';
import axios from 'axios';
import Footer from '../footer/index.js';

//  Class  Protofolio extends Components {}const Protofolio = () => {
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     axios.get("js/data.json").then((res) => {
//       setImages(res.data.portfolio);

//     });
//   }, []);

//   const ProtofoloioImage = images.map((imgs) => {

//     return (

//       <ImageHover key={imgs.id}>
//         <Img src={imgs.image} alt="" />
//         <OverLay>
//           <OverlaySpan>Show Image</OverlaySpan>
//         </OverLay>
//       </ImageHover>
//     );
//   });

//   return (
//     <ProtofolioSEction>
//       <ProtofolioTitle>
//         <Span>My</Span> Portfolio
//       </ProtofolioTitle>
//       < ProtofolioList>
//         <ProtofolioItem  active>All</ProtofolioItem>
//         <ProtofolioItem >HTML</ProtofolioItem>
//         <ProtofolioItem >Photoshop</ProtofolioItem>
//         <ProtofolioItem >Wordpress</ProtofolioItem>
//         <ProtofolioItem >Mobile</ProtofolioItem>
//       </ ProtofolioList>

//       <div className="box">
//         <ImageHover>
//           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
//           <OverLay>
//             <OverlaySpan>Show Image</OverlaySpan>
//           </OverLay>
//         </ImageHover>
//         <ImageHover>
//           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
//           <OverLay>
//             <OverlaySpan>Show Image</OverlaySpan>
//           </OverLay>
//         </ImageHover>
//         <ImageHover>
//           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
//           <OverLay>
//             <OverlaySpan>Show Image</OverlaySpan>
//           </OverLay>
//         </ImageHover>
//         <ImageHover>
//           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
//           <OverLay>
//             <OverlaySpan>Show Image</OverlaySpan>
//           </OverLay>
//         </ImageHover>
//         <ImageHover>
//           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
//           <OverLay>
//             <OverlaySpan>Show Image</OverlaySpan>
//           </OverLay>
//         </ImageHover>
//         <ImageHover>
//           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
//           <OverLay>
//             <OverlaySpan>Show Image</OverlaySpan>
//           </OverLay>
//         </ImageHover>
//         {ProtofoloioImage}
//           </div>
//     </ProtofolioSEction>
//   );
// };
class Protofolio extends Component {
  state={
    images:[]
  }
  componentDidMount(){
    axios.get('js/data.json').then(res =>{this.setState({
        images:res.data.portfolio
    })})
      
}
  render() {
    const {images} = this.state;
    const ProfolioImages = images.map((imgs)=>{
      return(
        <ImageHover key={imgs.id}>
                <Img src={imgs.image} alt="" />
                 <OverLay>
                  <OverlaySpan>Show Image</OverlaySpan>
                </OverLay>
              </ImageHover>
      )
    })
    return (
      <div>
        <ProtofolioSEction>
          <ProtofolioTitle>
            <Span>My</Span> Portfolio
          </ProtofolioTitle>
          <ProtofolioList>
            <ProtofolioItem active>All</ProtofolioItem>
            <ProtofolioItem>HTML</ProtofolioItem>
            <ProtofolioItem>Photoshop</ProtofolioItem>
            <ProtofolioItem>Wordpress</ProtofolioItem>
            <ProtofolioItem>Mobile</ProtofolioItem>
          </ProtofolioList>
          <div className='box'>
              {/* {ProfolioImages} */}
              <ImageHover>
           <Img src="images/Portfolio/portfolio-img1.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img2.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img3.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img4.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img5.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img6.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img7.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
         <ImageHover>
           <Img src="images/Portfolio/portfolio-img8.jpg" alt="" />
           <OverLay>
             <OverlaySpan>Show Image</OverlaySpan>
           </OverLay>
         </ImageHover>
          </div>
        </ProtofolioSEction>
        <Footer/>
      </div>
    );
  }
}
export default Protofolio;
