/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import profile from '../../images/profile.jpeg';
import green from '../../images/green.svg';
import gray from '../../images/gray.svg';
import orange from '../../images/orange.svg';

const rotate = keyframes`
0% {
  transform: scale(1) rotate(40deg)

}
50% {
  transform: scale(1.03) rotate(18deg)

}
100% {
  transform: scale(1) rotate(40deg)

}
`;
const scaleCircle = keyframes`
0% {
  transform: scale(1)

}
50% {
  transform: scale(1.09)

}
100% {
  transform: scale(1)

}
`;

export const StyledBioContainer = styled.div`
position: relative;
width: 1000px;
max-width: 100%;
margin: 200px auto 400px auto;
display:flex;
flex-direction:row;
// background-color:black;
`;

export const StyledLeftContainer = styled.div`
width: 500px;
margin-right:50px;
h1 {
  margin-top:70px;
  font-size:45px;
  font-weight:600;
  font-family:'Josefin Sans', 'sans-serif';
  color:#333333,
}
p {
margin-top:30px;
font-family:'Josefin Sans', 'sans-serif';
font-size:20px;
color:#333333,

}
div{
  margin-top:20px;
  display: flex;

  justify-content: flex-end;
  button {

    z-index:5;
    background-color:#446DF6;
    transition:200ms;
    color:#EFEFEF;
    &:active {
      transform:scale(1.2) rotate(-8deg);
     //  transform:scale(1.2) rotate(-8deg)'
    }
    a{
      color:#ffffff;
      display:inline;
     font-size:25px;
     font-weight:500;
     font-family:'Josefin Sans', 'sans-serif';
     position:relative;
     padding:10px 10px 4 px 10px;
    }
  }
}

}
`;

export const StyledRigthContainer = styled.div`
position: relative;
box-sizing:border-box;
padding:15px;
background-color:rgb(239,239,239);

img{
  height: 500px;
  width: 500px;

}

`;
export const GreenTriangle = styled.div`
position: absolute;

z-index:-1;
top:10%;
left:-12%;
width:15vw;
height:15vw;
// transform: rotate(-22deg);
padding:15px;
animation : 17s ${rotate} infinite;

img{
  opacity:0.5;

  width:15vw;
  height:15vw;

}

`;
export const GreyTriangle = styled.div`
position: absolute;
z-index:-1;
top:-35%;
right:-35%;
width:15vw;
height:15vw;
padding:15px;
animation : 17s ${rotate} infinite;

img{
  opacity:0.5;
  width:15vw;
  height:15vw;

}

`;
export const OrangeCircle = styled.div`
position: absolute;
z-index:-1;
bottom:-40%;
right:-30%;
width:15vw;
height:15vw;
padding:15px;
animation : 14s ${scaleCircle} infinite;

img{
  width:15vw;
  height:15vw;

}

`;

function BioContainer() {
  return (
    <StyledBioContainer>
      <StyledLeftContainer>
        <GreenTriangle>
          <img src={green} />
        </GreenTriangle>
        <h1>A frontend engineer focused on animation</h1>
        <p>Hi there, my name is Victor. I love motion and currently looking for a job where I can push pixels, shuffle data, and slap my keyboard until everything works.</p>
        <div>
          <button>
            <a href="https://gitconnected.com/victorvalim/resume">View Resume</a>
          </button>
        </div>
        <div>
          <button>
            <a href="https://github.com/victorvalim">View Github</a>
          </button>
        </div>

      </StyledLeftContainer>

      <StyledRigthContainer>
        <GreyTriangle>
          <img src={gray} />
        </GreyTriangle>
        <OrangeCircle>
          <img src={orange} />
        </OrangeCircle>
        <img src={profile} />
      </StyledRigthContainer>

    </StyledBioContainer>
  );
}

export default BioContainer;
