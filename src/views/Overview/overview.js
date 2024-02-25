import React from 'react'
import {Box, Heading} from '@chakra-ui/react'

import {BarChart, OverviewCard} from './components'
import MyDiv from './overview.style'

const overviewData = [
  {
    id: 1,
    name: 'Balance',
    value: '27.632',
    status: '+2.5%',
    desc: 'Compared to (21.340 last month)',
    type: 'Profit',
  },
  {
    id: 2,
    name: 'Income',
    value: '20.199',
    status: '+0.5%',
    desc: 'Compared to (19.000 last month)',
    type: 'Profit',
  },
  {
    id: 3,
    name: 'Liquidity',
    value: '110',
    status: '-1.5%',
    desc: 'Compared to ($165 last month)',
    type: 'loss',
  },
]

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        padding: 40,
        color: '#A7A6AF',
        font: {
          size: 12,
          weight: 400,
          family: 'Inter',
        },
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']

export const data = {
  labels,
  datasets: [
    {
      label: 'Releaszed',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: '#039855',
    },
    {
      label: 'Budget',
      data: [35, 49, 60, 61, 36, 25, 30],
      backgroundColor: '#A6F4C5',
    },
  ],
}

export default function Overview() {
  return (
    <MyDiv>
      <Box className="main_wrapper">
        <Box className="page_heading">
          <Heading as="h1" className="font_dm font_dark text_bold text_xl" mb={1}>Good Morning, Olivia</Heading>
          <Heading as="h6" className="font_dm font_extralight label_text text_medium">Welcome back, nice to see you again!</Heading>
        </Box>
        <OverviewCard overviewData={overviewData} />
        <BarChart data={data} options={options} />
      </Box>
    </MyDiv>
  )
}
