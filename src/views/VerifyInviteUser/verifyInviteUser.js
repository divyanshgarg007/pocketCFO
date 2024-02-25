/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react'
import {Box, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Input} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {AuthPanelImage, CustomButton, CustomToast, Loader} from '../../components'
import * as routesNames from '../../constants/routes'
import {ActionCreators} from '../../redux/actions'
import MyDiv from './verifyInviteUser.style'

const VerifyInviteUser = (props) => {

  const currentPassword = useRef({})
  const {addToast} = CustomToast()
  const navigate = useNavigate()
  const authState = useSelector((state) => state.authState)
  const {handleSubmit, register, reset, watch, formState: {errors}} = useForm()
  currentPassword.current = watch('password', '')

  const [searchParams] = useSearchParams()
  const urlToken = searchParams.get('token')

  useEffect(() => {
    if (urlToken) {
      let verifyUserToken = {
        token: urlToken,
      }
      props.actions.verifyInviteUserAction(verifyUserToken)
    }
  }, [urlToken])

  useEffect(() => {
    if (authState?.authVerifyInviteUser?.data?.meta?.status === 'success') {
      const value = authState?.authVerifyInviteUser?.data?.responce
      reset({
        name: value?.name,
        email: value?.email,
        company_name: value?.company_name,
        vat_number: value?.vat_number,
      })
      addToast({message: authState?.authVerifyInviteUser?.data?.meta?.message, status: 'success'})
    } else if (authState?.authVerifyInviteUser?.error?.meta?.status === 'failure') {
      addToast({message: authState?.authVerifyInviteUser?.error?.meta?.message, status: 'error'})
    }
  }, [authState?.authVerifyInviteUser])

  useEffect(() => {
    if (authState?.authSignupInviteUser?.data?.meta?.status === 'success') {
      addToast({message: authState?.authSignupInviteUser?.data?.meta?.message, status: 'success'})
      navigate(routesNames.LOGIN)
    } else if (authState?.authSignupInviteUser?.error?.meta?.status === 'failure') {
      addToast({message: authState?.authSignupInviteUser?.error?.meta?.message, status: 'error'})
      navigate(routesNames.VERIFYINVITEUSER)
    }
  }, [authState?.authSignupInviteUser])

  const onSubmit = (values) => {
    const userValues = authState?.authVerifyInviteUser?.data?.responce
    let verifiedData = {
      name: userValues?.name ?? values?.name,
      email: userValues?.email ?? values?.email,
      company_name: userValues?.company_name ?? values?.company_name,
      vat_number: userValues?.vat_number ?? values?.vat_number,
      step: 'invite_user',
      password: values.password,
    }
    props.actions.signupInviteUserAction(verifiedData)
  }

  return (
    <MyDiv>
      {(authState?.authVerifyInviteUser?.loading || authState?.authSignupInviteUser?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box>
        <Grid className="grid_container">
          <GridItem className="form_container">
            <Box className="w-100">
              <Box mb={8}>
                <Heading as="h1" className="font_inter text_xl font_dark text_bold main_heading">Signup User</Heading>
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
                  <FormControl isInvalid={errors.company_name}>
                    <FormLabel htmlFor="company_name" className="font_inter font_label label_text text_medium">Company name*</FormLabel>
                    <Input
                      size="md"
                      id="company_name"
                      name="company_name"
                      type="text"
                      placeholder="Enter your company name"
                      {...register('company_name', {required: 'Company Required'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.company_name && errors.company_name.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={5}>
                  <FormControl isInvalid={errors.vat_number}>
                    <FormLabel htmlFor="vat_number" className="font_inter font_label label_text text_medium">VAT Number*</FormLabel>
                    <Input
                      size="md"
                      id="vat_number"
                      name="vat_number"
                      type="text"
                      placeholder="Enter your VAT number"
                      {...register('vat_number', {required: 'VAT Number Required'})}
                      className="input_box font_light font_inter"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.vat_number && errors.vat_number.message}</FormErrorMessage>
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
                <Box mb={8}>
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
              </form>
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

export default connect(null, mapDispatchToProps)(VerifyInviteUser)
