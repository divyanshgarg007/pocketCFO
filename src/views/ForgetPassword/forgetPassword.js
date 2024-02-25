/* eslint-disable no-unused-vars */
import React from 'react'
import {Box, Grid, GridItem, Heading, Checkbox, Flex, Spacer, Stack, FormControl, FormLabel, Input, FormErrorMessage} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/actions'
import GoogleIcon from '../../images/google.png'
import {AuthPanelImage, CustomButton, CustomToast, Loader} from '../../components'
import * as routesNames from '../../constants/routes'
import MyDiv from './forgetPassword.style'

const ForgetPassword = (props) => {

  // const {addToast} = CustomToast()
  const {handleSubmit, register, formState: {errors}} = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <MyDiv>
      <Box>
        <Grid className="grid_container">
          <GridItem className="form_container">
            <Box className="w-100">
              <Box mb={8}>
                <Heading as="h1" className="font_inter text_xl font_dark text_bold main_heading">Forget your password</Heading>
                <Heading as="h4" size="sm" className="font_inter font_light text_regular">Please enter your details.</Heading>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={5}>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email" className="font_inter font_label label_text text_medium">Email</FormLabel>
                    <Input
                      size="md"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      {...register('email', {required: 'Email Required'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Stack spacing="4" mb={8}>
                  <CustomButton size="md" type="submit" title="Submit" className="btn_theme text_semibold font_inter w-100" />
                </Stack>
              </form>
              <Box>
                <Heading as="h6" className="font_inter font_light label_text text_regular text-center">Back To
                  <Link to={routesNames.LOGIN} className="text_semibold font_inter label_text font_link ml-1">
                    Login
                  </Link>
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
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(ForgetPassword)
