import React from 'react'
import {Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, Image,
  InputGroup, InputLeftElement, Stack} from '@chakra-ui/react'
import {ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import {NavLink} from 'react-router-dom'
import {TextBox} from '../../../Inputs'
import AppLogo from '../../../../images/app-logo.png'
import SearchIcon from '../../../../images/search.png'
import MyDiv from './mobileSidebar.style'

export default function MobileSidebar(props) {

  const PopupBox = () => (
    <MyDiv>
      <Box>
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image src={AppLogo} className="logo" />
          </DrawerHeader>
          <DrawerBody>
            <Box className="sidebar_box">
              <InputGroup>
                <InputLeftElement
                  className="icon_box"
                  pointerEvents="none"
                  children={<Image src={SearchIcon} className="icon_size" />}
                />
                <TextBox size="md" type="text" placeholder="Search" className="input_box font_dm font_light font_italic text_regular" />
              </InputGroup>
              <Stack spacing="1" className="menu_box">
                {props.Menus?.map((item) => {
                  return (
                    <Box key={item.id} onClick={() => props.handleMobileMenu(item)}>
                      <Box className={props.toggleMenu && item.id === props.menuId ? 'active_menu menu_item' : 'menu_item'}>
                        <NavLink to={item.link} className="font_dm font_label text_regular"><Image src={item.menuLogo} className="icon_size" />
                          {item.menuName}</NavLink>
                        {item.submenu &&
                        <>
                          {props.toggleMenu && item.id === props.menuId ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        </>
                        }
                      </Box>
                      {props.toggleMenu &&
                      <Box className="submenu_box" >
                        {item.id === props.menuId ? item?.submenu?.map((elem) => {
                          return (
                            <Box className="submenu_item" key={elem.id} onClick={(e) => props.handleMobileSubMenu(e, elem)}>
                              <NavLink to={elem.link} className="font_dm font_label text_regular">
                                {elem.submenuName}
                                {elem.badge &&
                                <Box className="badge font_inter font_label label_text text_medium">{elem.badge}</Box>
                                }
                              </NavLink>
                            </Box>
                          )
                        }) : null}
                      </Box>
                      }
                    </Box>
                  )
                })}
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Box>
    </MyDiv>
  )

  return (
    <Drawer
      isOpen={props.showSidebar}
      placement="left"
      onClose={props.handleSidebar}
    >
      {PopupBox()}
    </Drawer>
  )
}
