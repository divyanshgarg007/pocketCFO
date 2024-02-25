import React from 'react'
import {Box, Flex, Grid, GridItem, Heading, Spacer} from '@chakra-ui/react'
import {ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'
import MyDiv from './overviewCard.style'

export default function OverviewCard(props) {
  return (
    <MyDiv>
      <Grid className="grid_container">
        {props.overviewData?.map((item) => {
          return (
            <GridItem key={item.id}>
              <Box className="dashboard_card">
                <Heading as="h6" className="font_dm subtitle label_text text_medium">{item.name}</Heading>
                <Flex className="card_heading">
                  <Heading as="h1" className="font_dm font_dark text_xl text_black">{item.value}</Heading>
                  <Spacer />
                  <Heading pr={1} as="h6" className={item.type === 'Profit' ? 'font_dm label_text text_medium font_profit' : 'font_dm label_text text_medium font_loss'}>{item.status}</Heading>
                  {item.type === 'Profit' ? <ArrowUpIcon className="profit" /> : <ArrowDownIcon className="loss" />}
                </Flex>
                <Heading as="h6" className="font_dm font_extralight label_text text_medium">{item.desc}</Heading>
              </Box>
            </GridItem>
          )
        })}
      </Grid>
    </MyDiv>
  )
}
