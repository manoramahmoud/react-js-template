 
import  styled  from 'styled-components';

export const Socialmedia = styled.div`
height: auto;
overflow: hidden
`
// .social-media {
//     height: auto;
//     overflow: hidden
// }

export const Social = styled.div`
width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background:${props=> props.items ===1? "#3b5998":""};
background:${props=> props.items ===2? "#498cbf":""};
background:${props=> props.items ===3? "#cc2127":""};
@media (max-width:991px) {
    
        width: 100%;
        float: none;
    }
`
// .social-media .social {
//     width: 33.33%;
//     float: left;
//     box-sizing: border-box;
//     padding: 100px 0 100px 60px
// }


// .social-media .social.face {
//     background: #3b5998;
// }

// .social-media .social.twitter {
//     background: #498cbf;
// }

// .social-media .social.pin {
//     background: #cc2127;
// }
export const Icon = styled.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px;
margin-top: 23px;
`
// .social-media .social .icon {
//     width: 50px;
//     height: 50px;
//     background: #fff;
//     text-align: center;
//     line-height: 50px;
//     color: #888;
//     float: left;
//     margin-right: 10px;
//     margin-top: 23px;
// }

export const SocialDesc = styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff;
float: left;
`
// .social-media .social p {
//     font-weight: bold;
//     text-transform: uppercase;
//     font-size: 20px;
//     color: #fff;
//     float: left;
// }
 export const Span = styled.span`
 display: block;
 margin-bottom: 8px
 `
// .social-media .social p span {
//     display: block;
//     margin-bottom: 8px
// }
export const SpanInfo = styled.span`
font-weight: normal
`
// .social-media .social p span.info2 {
//     font-weight: normal
// }