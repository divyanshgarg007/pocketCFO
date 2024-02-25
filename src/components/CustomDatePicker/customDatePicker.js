import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MyDiv from './customDatePicker.style'

export default function CustomDatePicker(props) {

  return (
    <MyDiv>
      <DatePicker
        selected={props.startDate}
        onChange={props.onChange}
        showMonthYearPicker={props.showMonthYearPicker}
        dateFormat={props.dateFormat}
        calendarIcon={props.calendarIcon}
      />
    </MyDiv>
  )
}
