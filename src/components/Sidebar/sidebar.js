import React, {useEffect, useState} from 'react'
import {Box, Button, Flex, Heading, IconButton, Image,
  InputGroup, InputLeftElement, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Stack} from '@chakra-ui/react'
import {NavLink, useNavigate} from 'react-router-dom'
import {CheckIcon, ChevronDownIcon, ChevronUpIcon, HamburgerIcon} from '@chakra-ui/icons'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/actions'
import AppLogo from '../../images/app-logo.png'
import AppLogoCollapse from '../../images/logo-collapse.png'
import HomeLogo from '../../images/home.png'
import UserLogo from '../../images/user.png'
import FlagLogo from '../../images/flag.png'
import CheckLogo from '../../images/check.png'
import KeyLogo from '../../images/key.png'
import ChartLogo from '../../images/chart.png'
import LogoutIcon from '../../images/logout.png'
import MoreIcon from '../../images/more.png'
import CollpaseIcon from '../../images/collapse.png'
import {CustomToast, Loader, TextBox} from '../index'
import * as routesNames from '../../constants/routes'
import SearchIcon from '../../images/search.png'
import {base64ToString, getItem, removeAll, setItem, toBase64} from '../../utilities/authUtils'
import MyDiv from './sidebar.style'
import {MobileSidebar} from './components'

const Menus = [
  {
    id: 1,
    menuName: 'Overview',
    menuLogo: HomeLogo,
    link: routesNames.OVERVIEW,
  },
  {
    id: 2,
    menuName: 'Budgets',
    menuLogo: ChartLogo,
    submenu: [
      {
        id: 21,
        submenuName: 'Budgets',
        badge: '5',
        link: routesNames.BUDGETS,
      },
      {
        id: 22,
        submenuName: 'Salaries',
        link: routesNames.SALARIES,
        badge: '1',
      },
      {
        id: 23,
        submenuName: 'Investments',
        badge: '3',
      },
      {
        id: 24,
        submenuName: 'Loans and capital',
        badge: '7',
      },
    ],
  },
  {
    id: 3,
    menuName: 'Key numbers',
    menuLogo: KeyLogo,
  },
  {
    id: 4,
    menuName: 'Liquidity',
    menuLogo: CheckLogo,
    submenu: [
      {
        id: 41,
        submenuName: 'Actual cashflow',
      },
      {
        id: 42,
        submenuName: 'Budget cashflow',
      },
      {
        id: 43,
        submenuName: 'Forecast cashflow',
      },
    ],
  },
  {
    id: 5,
    menuName: 'Specifications',
    menuLogo: FlagLogo,
  },
  {
    id: 6,
    menuName: 'Integrations',
    menuLogo: UserLogo,
  },
]

const Sidebar = (props) => {

  const masterState = useSelector((state) => state.masterState)
  const profileState = useSelector((state) => state.profileState)
  const navigate = useNavigate()
  const {addToast} = CustomToast()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [menuId, setMenuId] = useState(null)
  const [currentOrgId, setCurrentOrgId] = useState(base64ToString(getItem('orgId')))
  const [showSidebar, setShowSidebar] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const userData = masterState?.getMasterData?.data?.responce?.user

  useEffect(() => {
    if (profileState?.getUserProfile?.loading === false) {
      props.actions.getUserDetailsAction()
    }
  }, [])

  useEffect(() => {
    if (profileState?.getUserProfile?.data?.meta?.status === 'success') {
      setUserInfo(profileState?.getUserProfile?.data?.responce)
    }
  }, [profileState?.getUserProfile])

  useEffect(() => {
    return () => {
      props?.actions?.cleanUpToast()
    }
  }, [])

  const handleMenu = (item) => {
    if (menuId !== item) {
      setToggleMenu(true)
    } else {
      setToggleMenu(!toggleMenu)
    }
    setMenuId(item)
  }

  const handleMobileMenu = (item) => {
    if (item.hasOwnProperty('submenu')) {
      setShowSidebar(true)
    } else {
      setShowSidebar(false)
    }
    if (menuId !== item.id) {
      setToggleMenu(true)
    } else {
      setToggleMenu(!toggleMenu)
    }
    setMenuId(item.id)
  }

  const handleMobileSubMenu = (e) => {
    e.stopPropagation()
    setShowSidebar(false)
  }

  const handleOrganization = (id) => () => {
    //org id needs to be stored in localStorage for axios configuration
    setItem('orgId', toBase64(id))
    setCurrentOrgId(base64ToString(getItem('orgId')))
    props.actions.getOrganizationAction()
  }

  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const handleLogout = () => {
    removeAll()
    props.actions.logoutUser()
    addToast({message: 'Logout Successfully', status: 'success'})
    navigate(routesNames.LOGIN)
  }

  return (
    <MyDiv>
      {(masterState.organizationList.loading || masterState.getMasterData.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className={props.toggleSidebar ? 'sidebar_collapse' : 'sidebar_wrapper'}>
        <Flex className="top_header">
          <Image src={props.toggleSidebar ? AppLogoCollapse : AppLogo} className={props.toggleSidebar ? 'collapse_logo' : 'logo'} />
          <Spacer />
          <IconButton className="collpase_icon" onClick={props.handleSidePanel} icon={<Image src={CollpaseIcon} />} />
        </Flex>
        <Box className={props.toggleSidebar ? 'sidebar_box_collapse' : 'sidebar_box'}>
          <InputGroup>
            <InputLeftElement
              className="icon_box"
              pointerEvents="none"
              children={<Image src={SearchIcon} className="icon_size" />}
            />
            <TextBox size="md" type="text" placeholder="Search" className="input_box font_dm font_light font_italic text_regular" />
          </InputGroup>
          <Stack spacing="1" className="menu_box">
            {Menus?.map((item) => {
              return (
                <Box key={item.id} onClick={() => handleMenu(item.id)}>
                  <Box className={toggleMenu && item.id === menuId ? 'active_menu menu_item' : 'menu_item'}>
                    <NavLink to={item.link} className="font_dm font_label text_regular"><Image src={item.menuLogo} className="icon_size" />
                      {props.toggleSidebar ? '' : item.menuName}</NavLink>
                    {item.submenu &&
                    <>
                      {toggleMenu && item.id === menuId ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </>
                    }
                  </Box>
                  {toggleMenu &&
                    <Box className={props.toggleSidebar ? 'hide_Submenu' : 'submenu_box'}>
                      {item.id === menuId ? item?.submenu?.map((elem) => {
                        return (
                          <Box className="submenu_item" key={elem.id}>
                            <NavLink to={elem.link} className="font_dm font_label text_regular">
                              {props.toggleSidebar ? '' : elem.submenuName}
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
        <Menu className="my">
          <Flex className="profile_menu">
            <MenuButton as={Button} leftIcon={<Image src={process.env.REACT_APP_BASE_URL + userInfo?.profile_image} className="profile_image" />}>
              <Heading as="h1" className="font_inter font_dark text_semibold label_text lh-20 text-left collapse_hide">{userInfo?.user_name}</Heading>
              <Heading as="h4" className="font_inter font_light text_regular label_text lh-20 text-left collapse_hide">{userInfo?.email}</Heading>
            </MenuButton>
            <IconButton className="logout_icon" onClick={handleLogout} icon={<Image src={LogoutIcon} className="icon_size" />} />
          </Flex>
          <MenuList className="dropdown_list">
            <Flex className="username">
              <Heading as="h4" className="font_dm font_label text_regular label_text lh-20">{userInfo?.email}</Heading>
              <Spacer />
              <IconButton icon={<Image src={MoreIcon} className="icon_size" />} />
            </Flex>
            {userData?.org_list?.map((item) => {
              return (
                <MenuItem key={item.org_id} onClick={handleOrganization(item.org_id)}>
                  <Image
                    boxSize="40px"
                    borderRadius="full"
                    src={process.env.REACT_APP_BASE_URL + item?.company_logo}
                    alt="Fluffybuns the destroyer"
                    mr="12px"
                  />
                  <Box className="company_info">
                    <Heading as="h1" className="font_inter font_label text_semibold label_text lh-20 text-left">{item.company_name}</Heading>
                    {/* <Heading as="h4" className="font_inter font_light text_regular label_text lh-20 text-left">Some Information</Heading> */}
                  </Box>
                  {+item.org_id === +currentOrgId ? <CheckIcon /> : null}
                </MenuItem>
              )
            })}

            <MenuDivider mt={0} mb={0} className="divider" />
            <MenuItem><NavLink className="font_dm font_label label_text text_medium link_nav" to={routesNames.SETTINGS}>Settings</NavLink></MenuItem>
            <MenuItem><NavLink className="font_dm font_label label_text text_medium link_nav" to={routesNames.PROFILE}>Profile</NavLink></MenuItem>
            <MenuItem><NavLink className="font_dm font_label label_text text_medium link_nav" to={routesNames.ADDORGANIZATION}>Add another account</NavLink></MenuItem>
            <MenuDivider mt={0} mb={0} className="divider" />
            <MenuItem className="font_dm font_label label_text text_medium logout_user" onClick={handleLogout}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box className="mobile_sidebar">
        <Box className="mobile_header">
          <IconButton icon={<HamburgerIcon />} onClick={handleSidebar} />
          <Image src={AppLogo} className="logo" />
          <Menu className="my">
            <Flex className="profile_menu">
              <MenuButton as={Button} leftIcon={<Image src={process.env.REACT_APP_BASE_URL + userInfo?.profile_image} className="profile_image" />} />
            </Flex>
            <MenuList className="dropdown_list">
              <Flex className="username">
                <Box>
                  <Heading as="h1" className="font_inter font_dark text_semibold label_text lh-20">{userInfo?.user_name}</Heading>
                  <Heading as="h4" className="font_dm font_label text_regular label_text lh-20">{userInfo?.email}</Heading>
                </Box>
                <Spacer />
                <IconButton icon={<Image src={MoreIcon} className="icon_size" />} />
              </Flex>
              {userData?.org_list?.map((item) => {
                return (
                  <MenuItem key={item.org_id} onClick={handleOrganization(item.org_id)}>
                    <Image
                      boxSize="40px"
                      borderRadius="full"
                      src={process.env.REACT_APP_BASE_URL + item?.company_logo}
                      alt="Fluffybuns the destroyer"
                      mr="12px"
                    />
                    <Box className="company_info">
                      <Heading as="h1" className="font_inter font_label text_semibold label_text lh-20 text-left">{item.company_name}</Heading>
                    </Box>
                    {+item.org_id === +currentOrgId ? <CheckIcon /> : null}
                  </MenuItem>
                )
              })}
              <MenuDivider mt={0} mb={0} className="divider" />
              <MenuItem><NavLink className="font_dm font_label label_text text_medium link_nav" to={routesNames.SETTINGS}>Settings</NavLink></MenuItem>
              <MenuItem><NavLink className="font_dm font_label label_text text_medium link_nav" to={routesNames.PROFILE}>Profile</NavLink></MenuItem>
              <MenuItem><NavLink className="font_dm font_label label_text text_medium link_nav" to={routesNames.ADDORGANIZATION}>Add another account</NavLink></MenuItem>
              <MenuDivider mt={0} mb={0} className="divider" />
              <MenuItem className="font_dm font_label label_text text_medium logout_user" onClick={handleLogout}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <MobileSidebar showSidebar={showSidebar} handleSidebar={handleSidebar} Menus={Menus} handleMobileMenu={handleMobileMenu}
          handleMobileSubMenu={handleMobileSubMenu} toggleMenu={toggleMenu}
          menuId={menuId}
        />
      </Box>
    </MyDiv>
  )
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Sidebar)
