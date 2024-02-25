import React, {useEffect} from 'react'
import {Box, Grid, GridItem, Heading, Checkbox, Flex, Spacer, Stack, FormControl, FormLabel, Input, FormErrorMessage} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../redux/actions'
import GoogleIcon from '../../images/google.png'
import {AuthPanelImage, CustomButton, CustomToast, Loader} from '../../components'
import * as routesNames from '../../constants/routes'
import {getItem, setItem, toBase64} from '../../utilities/authUtils'
import MyDiv from './login.style'

const Login = (props) => {

  const {addToast} = CustomToast()
  const navigate = useNavigate()
  const {handleSubmit, register, formState: {errors}} = useForm()
  const authState = useSelector((state) => state.authState)
  const userId = toBase64(authState?.authLogin?.data?.responce?.id)

  useEffect(() => {
    if (authState?.authLogin?.data?.meta?.status === 'success') {
      props.actions.masterDataAction()
      if (getItem('token')) {
        addToast({message: authState?.authLogin?.data?.meta?.message, status: 'success'})
        setItem('userId', userId)
        navigate(routesNames.SETTINGS)
      }
    } else if (authState?.authLogin?.error?.meta?.status === 'failure') {
      addToast({message: authState?.authLogin?.error?.meta?.message, status: 'error'})
      navigate(routesNames.LOGIN)
    }
  }, [authState?.authLogin])

  const onSubmit = (values) => {
    let userCredientials = {
      email: values.email,
      password: values.password,
    }
    props.actions.loginAction(userCredientials)
  }

  const handleGoogleLogin = () => {
    window.location.replace(`${process.env.REACT_APP_API_URL}login-with-google`)
  }

  return (
    <MyDiv>
      {(authState?.authLogin?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box>
        <Grid className="grid_container">
          <GridItem className="form_container">
            <Box className="w-100">
              <Box mb={8}>
                <Heading as="h1" className="font_inter text_xl font_dark text_bold main_heading">Log in to your account</Heading>
                <Heading as="h4" size="sm" className="font_inter font_light text_regular">Welcome back! Please enter your details.</Heading>
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
                <Box mb={5}>
                  <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor="password" className="font_inter font_label label_text text_medium">Password</FormLabel>
                    <Input
                      size="md"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Your password"
                      {...register('password', {required: 'Password Required', minLength: {value: 8, message: 'Password must be at least 8 characters'}})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.password && errors.password.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Flex mb={5}>
                  <Box>
                    <Checkbox className="check" >Remember for 30 days</Checkbox>
                  </Box>
                  <Spacer />
                  <Link to={routesNames.FORGETPASSWORD} className="text_semibold font_inter label_text font_link">
                    Forgot Password
                  </Link>
                </Flex>
                <Stack spacing="4" mb={8}>
                  <CustomButton size="md" type="submit" title="Sign in" className="btn_theme text_semibold font_inter w-100" />
                  <CustomButton onClick={() => handleGoogleLogin()} size="md" title="Sign in with Google" className="btn_white text_semibold font_inter w-100"
                    leftIcon={<img className="google_image" src={GoogleIcon} />}
                  />
                </Stack>
              </form>
              <Box>
                <Heading as="h6" className="font_inter font_light label_text text_regular text-center">Don’t have an account?
                  <Link to={routesNames.SIGNUP} className="text_semibold font_inter label_text font_link ml-1">
                    Sign up
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

export default connect(null, mapDispatchToProps)(Login)
