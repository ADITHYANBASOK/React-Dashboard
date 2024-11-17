import styled from '@emotion/styled';
import { NavLink as RouterNavLink } from 'react-router-dom';  // Using react-router for routing

// BottomRow styled component
export const BottomRow = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;  /* Ensures the navbar items are stacked vertically */
  padding: 10px;
  width: 100%;
`;

// NavItem styled component
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 0px;
  background-color: ${(props) => 
    props.active ? 'rgba(80, 200, 120, 0.3)' : 'rgba(255, 255, 255, 0.8)'
  };  /* Highlight active item */
  cursor: pointer;
  position : relative;

  &:hover {
    background-color: #006666;  /* Darker shade on hover */
  }
`;

// Logo styled component
export const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const NavIcon = styled.div`
  margin-right: 20px;
  font-size: 1.em;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  color:${(props) => (props.active ? 'green' : 'black')};
  position:${(props)=> props.position || 'relative'};
  right:${(props)=> props.right || 'auto'};

`;

// NavLink styled component
export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: black;
  font-size: 1em;
  font-weight: 600;

  &.active {
    color: 	green;  /* Different color for active link */
  }
`;

export const VerticalLineContainer = styled.div`
     height: 90%;
     width: 6px;
     border-radius: 5px;
     background-color: ${(props) => (props.active ? '#50C878' : '#FFFFFF')};
     position: absolute;
     left: ${(props)=> props.left || '-30px'};
`;

export const TopNavSerachIcon = styled.div`
position:${(props)=> props.position || 'relative'};
right:${(props)=> props.right || 'auto'};
`