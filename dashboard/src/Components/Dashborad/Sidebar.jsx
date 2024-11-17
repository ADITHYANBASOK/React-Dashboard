import React from 'react'
// import { FaHome } from 'react-icons/fa';


import { BottomRow, NavItem, NavLink,NavIcon, VerticalLineContainer } from '../../Styles/SidebarStyle'
import { menuItems } from '../Data/NavbarData'
import { iconMap } from '../Data/NavbarIcon'

function Sidebar() {
  return (
    <>
      <BottomRow>
      {menuItems.map(item => {
        const IconComponent = iconMap[item.icon];
        return (

      <NavItem key={item.id} active={window.location.pathname === item.path}>
        <VerticalLineContainer active={window.location.pathname === item.path}/>
        <NavIcon active={window.location.pathname === item.path}>{IconComponent ? <IconComponent /> : null}</NavIcon>
        <NavLink to={item.path} activeClassName="active">{item.name}</NavLink>
      </NavItem>
        );
      })}
      {/* <NavItem>
        <NavIcon>_</NavIcon>
        <NavLink  activeClassName="active">About</NavLink>
      </NavItem>
      <NavItem>
         {/* <NavIcon><FaHome /></NavIcon> */}
        {/* <NavLink  activeClassName="active">Contact</NavLink>
      </NavItem>  */}
      {/* Add more NavItems as needed */}
    </BottomRow>
    </>
  )
}

export default Sidebar
