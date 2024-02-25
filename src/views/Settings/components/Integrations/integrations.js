import React, {useState} from 'react'
import {Box, Flex, Grid, GridItem, Image, Link, Spacer, Switch, Text} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import EconomicLogo from '../../../../images/economic.jpg'
import DanlonLogo from '../../../../images/danlon.jpg'
import SalaryLogo from '../../../../images/salary.jpg'
import {CustomButton} from '../../../../components'
import * as routesNames from '../../../../constants/routes'
import MyDiv from './integrations.style'

const integrationData = [
  {
    id: 1,
    image: EconomicLogo,
    linkTitle: 'www.e-conomic.dk',
    link: 'https://www.e-conomic.dk',
    description: 'Something very interesting about this integration. And here is a bit more of text.',
  },
  {
    id: 2,
    image: DanlonLogo,
    link: 'https://www.danlon.dk',
    linkTitle: 'www.danlon.dk',
    description: 'Something very interesting about this integration. And here is a bit more of text.',
  },
  {
    id: 3,
    image: SalaryLogo,
    linkTitle: 'www.salary.dk',
    link: 'https://www.salary.dk',
    description: 'Something very interesting about this integration. And here is a bit more of text.',
  },
]

export default function Integrations() {

  const navigate = useNavigate()
  const [checkSwitch, setCheckSwitch] = useState({})

  const handleSwitch = (id) => (e) => {
    setCheckSwitch({...checkSwitch, [id]: e.target.checked})
  }

  const handleViewIntegration = () => {
    console.log('clicked')
    navigate(routesNames.VIEWINTEGRATION)
  }

  return (
    <MyDiv>
      <Grid className="grid_container">
        {integrationData?.map((item) => {
          return (
            <GridItem key={item.id}>
              <Box className="integration_wrapper">
                <Box className="integration_card">
                  <Image src={item.image} />
                  <Link href={item.link} className="font_dm small_text text_medium link_color" isExternal>{item.linkTitle}</Link>
                  <Text mt={1} className="font_dm font_dark label_text text_regular">{item.description}</Text>
                </Box>
                <Box className="integration_actions">
                  <Flex alignItems="center">
                    {checkSwitch[item.id] ?
                      <CustomButton size="md" title="View integration" className="btn_light text_medium font_dm label_text" onClick={handleViewIntegration} /> :
                      <CustomButton size="md" title="Install integration" className="btn_light text_medium font_dm label_text" />
                    }
                    <Spacer />
                    <Switch size="md" className="switch_check" isChecked={checkSwitch[item.id]} onChange={handleSwitch(item.id)} />
                  </Flex>
                </Box>
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </MyDiv>
  )
}
