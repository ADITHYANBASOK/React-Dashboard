/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: max(250px, 15%) 1fr;
  grid-template-areas: 
    "left-column right-column";
  height: 100vh;
  gap: 10px;
`;

export const LeftColumn = styled.div`
  grid-area: left-column;
  display: grid; /* Make this a grid container */
  grid-template-rows: 15% 1fr; /* First row: 20% of height, Second row: remaining space */
  background-color: #FFFFFF;
  padding: 10px 20px;
`;

export const RightColumn = styled.div`
  grid-area: right-column;
  display: grid; /* Make this a grid container */
  grid-template-rows: 10% 1fr; /* First row: 20% of height, Second row: remaining space */
  background-color: gray;
  padding: 20px;
`;

//right top 

export const TopNavbar = styled.div`
 display: flex;
`;

export const Column1 = styled.div`
  flex: 0 0 60%;
  background-color:gray;
`;

export const Column2 = styled.div`
  flex: 0 0 20%;
  background-color:gray;

`;

export const Column3 = styled.div`
  flex: 0 0 20%;
  background-color:gray;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputWrapper = styled.div`
 position: relative;
 Height: 100%;
 padding: 10px;
 display: flex;
 align-items: center;
 justify-content: center;

`;

export const InputSerach = styled.input`
 width: 100%;
 positon :relative;
 padding:10px;
 border-radius: 5px;
 background-color:#FFFFFF;
`;

export const Square = styled.div`
height: 100%; /* Full width of the parent */
aspect-ratio: 1 / 1;
background-color: ${(props) => props.bsgcolor || 'red'};
color:${(props) => props.color || 'red'};
border-radius: 17px;
margin:10px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`;

export const  IconCss = css`
 font-size: 1.8em;
 width: 90%;
 color: orange;
`
export const CircleContainer = styled.div`
 height: 27px;
 width: 27px;
 border-radius: 50%;
 background-color: gray;
 position: absolute;
 top: -7px;
 right: -7px;
 display: flex ;
 align-items: center;
 justify-content: center;
`
export const SmallCircle = styled.div`
 height: 15px;
 width: 15px;
 border-radius: 50%;
 background-color: ${(props) => props.color || 'red'};
 color: black;
 display: flex ;
 align-items: center;
 justify-content: center;
 padding: 10px;

`;

export const Avatar = styled.div`
  grid-area: avatar;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white; /* Avatar background color */
  color: #007bff; /* Avatar text color */
  font-weight: bold;
  position:${({position}) => position || 'static'};
  left:${({ left }) => left || 'auto'};
  top:${({top}) => top || 'auto'}
`;