import styled from'styled-components'


export const ProtofolioSEction = styled.div`
background: #f8f8f8;
padding-top: 20px; 
overflow: hidden;

`
//   .portfolio {
//     background: #f8f8f8;
//     padding-top: 20px; 
//     overflow: hidden;
// }
export const ProtofolioTitle = styled.h2`
text-align: center;
font-size: 35px
`
 export const Span = styled.span`
 font-weight: normal
 `
// .portfolio .portfolio-title {
//     text-align: center;
//     font-size: 35px
// }

// .portfolio .portfolio-title span {
//     font-weight: normal
// }
export const ProtofolioList = styled.ul`
list-style: none;
text-align: center;
margin: 20px 0
`
// .portfolio .portfolio-list {
//     list-style: none;
//     text-align: center;
//     margin: 20px 0
// }

export const ProtofolioItem = styled.li`
display: inline-block;
width: 100px;
padding: 10px
background :${props=> props.active? "#eb5424":""};
color :${props=> props.active ?"#fff": "#000"}
`
// .portfolio .portfolio-list .portfolio-item {
//     display: inline-block;
//     width: 100px;
//     padding: 10px
// }

// .portfolio .portfolio-list .portfolio-item.active {
//     background: #eb5424;
//     color: #fff
// }
export const ImageHover = styled.div`
width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > div{
        opacity: 1
    }
`
// .box div {
//     width: 25%;
//     float: left;
//     font-size: 0;
//     position: relative;
// }
export const Img= styled.img`
width: 100%`
// .box div img {
//     width: 100%
// }
export const OverLay = styled.div`
 position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0
`
// .box div .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     background: rgba(235,84,36 , 0.5);
//     font-size: 15px;
//     opacity: 0
// }
 export const OverlaySpan = styled.span`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
 background: #fff;
 display: block;
 padding: 10px 20px;
 cursor: pointer;
 border: 2px solid #eb5424;
 `
// .box div .overlay span{
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     background: #fff;
//     display: block;
//     padding: 10px 20px;
//     cursor: pointer;
//     border: 2px solid #eb5424;
// }

// .box div:hover .overlay {
//     opacity: 1
// }
