/* eslint-disable no-unused-vars */
import React, {useRef} from 'react'
import {Box, Grid, GridItem, Heading, Flex, Stack, FormControl, FormLabel, FormErrorMessage, Input, Divider} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/actions'
import GoogleIcon from '../../images/google.png'
import FacebookIcon from '../../images/facebook.png'
import AppleIcon from '../../images/apple.png'
import {AuthPanelImage, CustomButton, Loader} from '../../components'
import * as routesNames from '../../constants/routes'
import MyDiv from './signup.style'

const Signup = (props) => {

  const currentPassword = useRef({})
  const navigate = useNavigate()
  const {handleSubmit, register, watch, formState: {errors}} = useForm()

  currentPassword.current = watch('password', '')

  const onSubmit = (values) => {
    let userData = {
      user_name: values.name,
      email: values.email,
      password: values.password,
    }
    props.actions.signupEmailAction(userData)
    navigate(routesNames.EMAILVERIFICATION, {state: values.email})
  }

  const handleGoogleLogin = () => {
    window.location.replace(`${process.env.REACT_APP_API_URL}login-with-google`)
  }

  return (
    <MyDiv>
      <Box>
        <Grid className="grid_container">
          <GridItem className="form_container">
            <Box className="w-100">
              <Box mb={8}>
                <Heading as="h1" className="font_inter text_xl font_dark text_bold main_heading">Create an account</Heading>
                <Heading as="h4" size="sm" className="font_inter font_light text_regular">Start your 30-day free trial.</Heading>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={5}>
                  <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name" className="font_inter font_label label_text text_medium">Name*</FormLabel>
                    <Input
                      size="md"
                      id="name"
                      name="name"
                      type="name"
                      placeholder="Enter Your name"
                      {...register('name', {required: 'Name Required', pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: 'No special and numeric characters allowed',
                      }})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.name && errors.name.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email" className="font_inter font_label label_text text_medium">Email</FormLabel>
                    <Input
                      size="md"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      {...register('email', {required: 'Email Required'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor="password" className="font_inter font_label label_text text_medium">Password*</FormLabel>
                    <Input
                      size="md"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      {...register('password', {required: 'Password Required', minLength: {value: 8, message: 'Password must be at least 8 characters'}})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.password && errors.password.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <FormControl isInvalid={errors.confirm_password}>
                    <FormLabel htmlFor="confirm_password" className="font_inter font_label label_text text_medium">Confirm Password*</FormLabel>
                    <Input
                      size="md"
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      placeholder="Confirm password"
                      {...register('confirm_password', {required: 'Confirm Password Required', validate: (value) => value === currentPassword.current || 'The passwords do not match'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.confirm_password && errors.confirm_password.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <CustomButton size="md" type="submit" title="Get started" className="btn_theme text_semibold font_inter w-100" />
                </Box>
                <Flex className="separator">
                  <Divider />
                  <Heading as="h4" size="sm" className="font_inter font_light text_regular label_text">OR</Heading>
                  <Divider />
                </Flex>
                <Stack spacing="4" mb={8}>
                  <CustomButton onClick={() => handleGoogleLogin()} size="md" title="Sign up with Google" className="btn_white text_semibold font_inter w-100"
                    leftIcon={<img className="google_image" src={GoogleIcon} />}
                  />
                  <CustomButton size="md" title="Sign up with Facebook" className="btn_white text_semibold font_inter w-100"
                    leftIcon={<img className="google_image" src={FacebookIcon} />}
                  />
                  <CustomButton size="md" title="Sign up with Apple" className="btn_white text_semibold font_inter w-100"
                    leftIcon={<img className="google_image" src={AppleIcon} />}
                  />
                </Stack>
              </form>
              <Box>
                <Heading as="h6" className="font_inter font_light label_text text_regular text-center">Already have an account?
                  <Link to={routesNames.LOGIN} className="text_semibold font_inter label_text font_link ml-1">
                    Log in
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

export default connect(null, mapDispatchToProps)(Signup)
