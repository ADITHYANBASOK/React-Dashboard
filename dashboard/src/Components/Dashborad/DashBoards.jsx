import React from 'react'
import { GridContainer, LeftColumn, RightColumn } from '../../Styles/DashboardStyles'
import { CentralContainer, SmallText, Title } from '../../Styles/CommonStyles'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

function DashBoards() {
  return (
    <>
    <GridContainer>
      <LeftColumn>
        <CentralContainer>
            <Title size='2.5em'>Concepta</Title>
            <SmallText>Modern Admin Dashboard</SmallText>
        </CentralContainer>
        <Sidebar/>

      </LeftColumn>
      <RightColumn>
        <Navbar/>
      </RightColumn>
    </GridContainer>
    </>
  )
}

export default DashBoards
