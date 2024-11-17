import React from 'react'
import { Avatar, CircleContainer, Column1, Column2, Column3, IconCss, InputSerach, InputWrapper, SmallCircle, Square, TopNavbar } from '../../Styles/DashboardStyles'
import { NavIcon, TopNavSerachIcon, VerticalLineContainer } from '../../Styles/SidebarStyle'
import { IoIosSearch } from "react-icons/io";
import { RiNotification4Line } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { Text } from '../../Styles/CommonStyles';

function Navbar() {
  return (
    <>
      <TopNavbar>
        <Column1>
        <InputWrapper>
        <InputSerach placeholder='serach here'>
        
        </InputSerach>
        <NavIcon position="absolute" right="10px"><IoIosSearch/></NavIcon>
        
        </InputWrapper>
        </Column1>
        <Column2>
        <InputWrapper>
        <Square bsgcolor="rgba(255, 0, 0, 0.3)" color="rgba(255, 0, 0)"><RiNotification4Line /><CircleContainer ><SmallCircle color="rgba(255, 0, 0)">22</SmallCircle></CircleContainer></Square>
        <Square bsgcolor="rgba(0, 0, 255, 0.3)" color="rgba(0, 0, 255)"><CiSettings/><CircleContainer ><SmallCircle color="rgba(0, 0, 255)">18</SmallCircle></CircleContainer></Square>
        </InputWrapper>
        </Column2>
        <Column3>
        <VerticalLineContainer left="0px"/>
        <InputWrapper>
         <Text>hello,<b>samantha</b></Text>
         <Avatar>A</Avatar>
        </InputWrapper>
        
        </Column3>
      </TopNavbar>
    </>
  )
}

export default Navbar
