import styled from 'styled-components';
export const HomeSection = styled.div`
  height: 500px;
  background: url('images/Home/home-bg.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;
`;
//     height: 500px;
//     /* background: url('../images/Home/home-bg.jpg'); */
//     background-size: cover;
//     background-position: center;
//     text-align: center;
//     position: relative;
// }
export const HomeInformation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// .home .home-information {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%)
// }
export const HomeTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #5e5e5e;
  @media (max-width: 768px) {
    font-size: 40px;
    color: #fff;
  };
  @media (max-width: 575px) {
    font-size: 30px;
  }
`;

// .home .home-information .home-title {
//     font-size: 60px;
//     font-weight: bold;
//     color: #5e5e5e;
// }
export const HomeInfo = styled.h4`
  font-size: 35px;
  color: #eb5424;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// .home .home-information .home-info {
//     font-size: 35px;
//     color: #eb5424;
//     margin-bottom: 20px;
// }
export const HomeDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #888;
  margin-bottom: 20px ;
  @media (max-width: 768px) {
    font-size: 16px;
    max-width:100%
    font-weight:600
  }
`;

// .home .home-information .home-desc {
//     font-size: 20px;
//     line-height: 1.5;
//     color: #888;
//     margin-bottom: 20px
// }
export const Span = styled.span`
  color: #000;
`;

// .home .home-information .home-desc span {
//     color: #000
// }
export const HOmeBtn = styled.button`
background: #eb5424;
color: #fff;
font-size: 18px;
width: 150px;
border: 0;
padding: 15px;
cursor: pointer;
font-weight: bold;
transition:0.5s;
   &:hover{
    background: #fff;
    color: #eb5424 
   }
`;

// .home .home-information .home-btn {
//     background: #eb5424;
//     color: #fff;
//     font-size: 18px;
//     width: 150px;
//     border: 0;
//     padding: 15px;
//     cursor: pointer;
//     font-weight: bold
// }

// .home .home-information .home-btn:hover {
//     background: #fff;
//     color: #eb5424
// }
