import React, {useEffect} from 'react'
import {Box, Grid, GridItem, Heading} from '@chakra-ui/react'
import {useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AuthPanelImage, CustomToast, Loader} from '../../components'
import MyDiv from './emailVerification.style'

export default function EmailVerification() {

  const location = useLocation()
  const email = location.state
  const {addToast} = CustomToast()

  const authState = useSelector((state) => state.authState)

  useEffect(() => {
    if (authState?.authSignUpEmail?.data?.meta?.status === 'success') {
      addToast({message: authState?.authSignUpEmail?.data?.meta?.message, status: 'success'})
    } else if (authState?.authSignUpEmail?.error?.meta?.status === 'failure') {
      addToast({message: authState?.authSignUpEmail?.error?.meta?.message, status: 'error'})
    }
  }, [authState?.authSignUpEmail])

  return (
    <MyDiv>
      {(authState?.authSignUpEmail?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box>
        <Grid className="grid_container">
          <GridItem className="form_container">
            <Box className="w-100">
              <Box>
                <Heading as="h1" mb={5} className="font_inter text_xl font_dark text_bold">Please verify your email address</Heading>
                <Heading as="h4" size="sm" mb={5} className="font_inter font_light text_regular">Before we get started, we need to verify your email.</Heading>
                <Heading as="h4" size="sm" className="font_inter font_light text_regular">
                  We sent a confirmation email to <span className="text_semibold font_inter font_link">{email}</span> Please follow up the instructions to activate your account.
                </Heading>
              </Box>
            </Box>
          </GridItem>
          <GridItem className="flex_items d-none">
            <AuthPanelImage />
          </GridItem>
        </Grid>
      </Box>
    </MyDiv>
  )
}

