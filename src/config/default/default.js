import React, {useState} from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import {Sidebar} from '../../components'
import MyDiv from './default.style'

const AppLayout = (props) => {

  const [toggleSidebar, setToggleSidebar] = useState(false)

  const handleSidePanel = () => {
    setToggleSidebar(!toggleSidebar)
  }

  return (
    <MyDiv>
      <Grid className={toggleSidebar ? 'parent_grid_toggle' : 'parent_grid'}>
        <GridItem className="sidebar_grid">
          <Sidebar toggleSidebar={toggleSidebar} handleSidePanel={handleSidePanel} />
        </GridItem>
        <GridItem bg="white" className="children_grid">
          {props.children}
        </GridItem>
      </Grid>
    </MyDiv>
  )
}

export default AppLayout
