import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import MyDiv from './barChart.style'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)
export default function BarChart(props) {
  return (
    <MyDiv>
      <Bar options={props.options} data={props.data} />
    </MyDiv>
  )
}
