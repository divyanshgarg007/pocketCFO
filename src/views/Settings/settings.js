/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Box, Heading, Stack} from '@chakra-ui/react'
import {NavLink, useLocation} from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import {urlToString} from '../../utilities/authUtils'
import MyDiv from './settings.style'

const tabMenus = [
  {
    id: 1,
    tabName: 'Organization',
    link: routesNames.SETTINGS,
  },
  {
    id: 2,
    tabName: 'Charts of accounts',
    link: routesNames.CHARTSOFACCOUNTS,
  },
  {
    id: 3,
    tabName: 'VAT codes',
    link: routesNames.VATCODES,
  },
  {
    id: 4,
    tabName: 'Users',
    link: routesNames.USERS,
  },
  {
    id: 5,
    tabName: 'Budget Settings',
    link: routesNames.BUDGETSETTINGS,
  },
  {
    id: 6,
    tabName: 'Integrations',
    link: routesNames.INTEGRATIONS,
  },
]

export default function Settings({children}) {

  const location = useLocation()
  const {pathname} = location
  const currentTab = urlToString(pathname.split('/')[2])
  const [toggleMenuId, setToggleMenuId] = useState(null)

  const handleMenu = (item) => {
    setToggleMenuId(item)
  }

  useEffect(() => {
    const activeId = tabMenus.find((item) => item.tabName.toLocaleLowerCase() === currentTab).id
    setToggleMenuId(activeId)
  }, [])

  return (
    <MyDiv>
      <Box className="main_wrapper">
        <Heading as="h1" className="font_dm font_dark text_bold text_xl page_heading">Settings</Heading>
        <Stack className="menu_box tab_list">
          {tabMenus?.map((item) => {
            return (
              <Box className="menu_list" key={item.id} onClick={() => handleMenu(item.id)}>
                <Box className={toggleMenuId === item.id ? 'active_menu menu_item' : 'menu_item'}>
                  <NavLink to={item.link} className="font_dm text_medium label_text tabs_label tabs">{item.tabName}</NavLink>
                </Box>
              </Box>
            )
          })}
        </Stack>
        <Box className="tab_panel">
          {children}
        </Box>
      </Box>
    </MyDiv>
  )
}
