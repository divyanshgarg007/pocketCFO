import React from 'react'
import {Input} from '@chakra-ui/react'
import MyDiv from './textBox.style'

export default function TextBox(props) {
  return (
    <MyDiv>
      <Input
        placeholder={props.placeholder}
        id={props.id}
        size={props.size}
        name={props.name}
        type={props.type}
        className={props.className}
        {...props}
      />
    </MyDiv>
  )
}
