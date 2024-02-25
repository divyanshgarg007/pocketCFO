import React from 'react'
import {Heading} from '@chakra-ui/react'
import MyDiv from './emptyMessage.style'

export default function EmptyMessage(props) {
  return (
    <MyDiv>
      <Heading as="h1" className="font_dm font_light text_medium empty_heading">{props.title}</Heading>
    </MyDiv>
  )
}
