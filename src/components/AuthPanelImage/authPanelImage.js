import React from 'react'
import {Image, Box} from '@chakra-ui/react'
import AuthImage from '../../images/mobile.png'
import MyDiv from './authPanelImage.style'

export default function AuthPanelImage() {
  return (
    <MyDiv>
      <Box className="auth-image">
        <Image src={AuthImage} />
      </Box>
    </MyDiv>
  )
}
