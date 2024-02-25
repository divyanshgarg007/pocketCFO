import React from 'react'
import {Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import AccountChartsMapping from '../AccountChartsMapping'
import MyDiv from './viewIntegrations.style'

export default function ViewIntegrations() {
  return (
    <MyDiv>
      <Box className="main_wrapper">
        <Heading as="h1" className="font_dm font_dark text_bold text_xl page_heading">e-conomic Integration</Heading>
        <Tabs>
          <TabList className="tab_list">
            <Tab className="tabs font_dm text_medium label_text tabs_label">Set up</Tab>
            <Tab className="tabs font_dm text_medium label_text tabs_label">Chart of accounts mapping</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="tab_panel">
              Setup
            </TabPanel>
            <TabPanel className="tab_panel">
              <AccountChartsMapping />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </MyDiv>
  )
}
