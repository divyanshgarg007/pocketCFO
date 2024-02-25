/* eslint-disable radix */
import React, {useEffect} from 'react'
import {Box, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Input, Stack} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {useNavigate, Link, useSearchParams, useLocation} from 'react-router-dom'
import {ActionCreators} from '../../redux/actions'
import {AuthPanelImage, CustomButton, CustomToast, Loader} from '../../components'
import * as routesNames from '../../constants/routes'
import {setItem} from '../../utilities/authUtils'
import MyDiv from './register.style'

const Register = (props) => {

  const {addToast} = CustomToast()
  const navigate = useNavigate()
  const location = useLocation()
  const {handleSubmit, register, formState: {errors}} = useForm()
  const authState = useSelector((state) => state.authState)

  const [searchParams] = useSearchParams()
  const urlToken = searchParams.get('token')
  const verifyAuthToken = location.search

  useEffect(() => {
    if (urlToken) {
      let confirmToken = {
        token: urlToken,
      }
      props.actions.verifyEmailAction(confirmToken)
    }
  }, [urlToken])

  useEffect(() => {
    props.actions.googleLoginAction(verifyAuthToken)
  }, [verifyAuthToken])

  useEffect(() => {
    if (authState?.authVerifyEmail?.data?.meta?.status === 'success') {
      addToast({message: authState?.authVerifyEmail?.data?.meta?.message, status: 'success'})
    } else if (authState?.authVerifyEmail?.error?.meta?.status === 'failure') {
      addToast({message: authState?.authVerifyEmail?.error?.meta?.message, status: 'error'})
    }
  }, [authState?.authVerifyEmail])

  useEffect(() => {
    if (authState?.authSignUp?.data?.meta?.status === 'success') {
      addToast({message: authState?.authSignUp?.data?.meta?.message, status: 'success'})
      navigate(routesNames.LOGIN)
    } else if (authState?.authSignUp?.error?.meta?.status === 'failure') {
      addToast({message: authState?.authSignUp?.error?.meta?.message, status: 'error'})
      navigate(routesNames.REGISTER)
    }
  }, [authState?.authSignUp])

  useEffect(() => {
    if (authState?.googleLoginAuth?.data?.responce?.auth_token) {
      if (authState?.googleLoginAuth?.data?.meta?.status === 'success') {
        addToast({message: authState?.googleLoginAuth?.data?.meta?.message, status: 'success'})
        setItem('token', authState?.googleLoginAuth?.data?.responce?.auth_token)
        navigate(routesNames.SETTINGS)
      } else if (authState?.googleLoginAuth?.error?.meta?.status === 'failure') {
        addToast({message: authState?.googleLoginAuth?.error?.meta?.message, status: 'error'})
        navigate(routesNames.LOGIN)
      }
    } else if (!authState?.googleLoginAuth?.data?.responce?.auth_token) {
      if (authState?.googleLoginAuth?.data?.meta?.status === 'success') {
        addToast({message: authState?.googleLoginAuth?.data?.meta?.message, status: 'success'})
      } else if (authState?.googleLoginAuth?.error?.meta?.status === 'failure') {
        addToast({message: authState?.googleLoginAuth?.error?.meta?.message, status: 'error'})
      }
    }
  }, [authState?.googleLoginAuth])

  const email = authState?.authVerifyEmail?.data?.responce?.email
  const emailLogin = authState?.googleLoginAuth?.data?.responce?.email

  console.log(emailLogin)

  const onSubmit = (values) => {
    let userData = {
      email: authState?.authVerifyEmail?.data?.responce?.email ? email : emailLogin,
      company_name: values.company,
      vat_number: values.vat,
      address: values.street,
      zip: parseInt(values.zip),
      city: values.city,
      step: 2,
    }
    props.actions.signupAction(userData)
  }

  return (
    <MyDiv>
      {(authState?.authSignUp?.loading || authState?.authVerifyEmail?.loading || authState?.googleLoginAuth?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box>
        <Grid className="grid_container">
          <GridItem className="form_container">
            <Box className="w-100">
              <Box mb={8}>
                <Heading as="h1" className="font_inter text_xl font_dark text_bold main_heading">Sign up</Heading>
                <Heading as="h4" size="sm" className="font_inter font_light text_regular">Start your 30-day free trial.</Heading>
              </Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={5}>
                  <FormControl isInvalid={errors.company}>
                    <FormLabel htmlFor="company" className="font_inter font_label label_text text_medium">Company name*</FormLabel>
                    <Input
                      size="md"
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Enter your company name"
                      {...register('company', {required: 'Company Required'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.company && errors.company.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <FormControl isInvalid={errors.vat}>
                    <FormLabel htmlFor="vat" className="font_inter font_label label_text text_medium">VAT Number*</FormLabel>
                    <Input
                      size="md"
                      id="vat"
                      name="vat"
                      type="text"
                      placeholder="Enter your VAT number"
                      {...register('vat', {required: 'VAT Number Required'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.vat && errors.vat.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <FormControl>
                    <FormLabel className="font_inter font_label label_text text_medium">Address</FormLabel>
                    <Input
                      size="md"
                      id="street"
                      name="street"
                      type="text"
                      placeholder="Street"
                      {...register('street')}
                      className="input_box font_light font_inter"
                    />
                    <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={2}>
                      <Input
                        size="md"
                        id="zip"
                        name="zip"
                        type="text"
                        placeholder="Zip"
                        {...register('zip')}
                        className="input_box font_light font_inter"
                      />
                      <Input
                        size="md"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="City"
                        {...register('city')}
                        className="input_box font_light font_inter"
                      />
                    </Grid>
                  </FormControl>
                </Box>
                <Stack spacing="4" mb={8}>
                  <CustomButton size="md" type="submit" title="Create account" className="btn_theme text_semibold font_inter w-100" />
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

export default connect(null, mapDispatchToProps)(Register)
