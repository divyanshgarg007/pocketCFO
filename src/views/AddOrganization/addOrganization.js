/* eslint-disable no-unused-vars */
import React, {useEffect, useRef, useState} from 'react'
import {Box, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Image, Input, Select} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {useNavigate} from 'react-router-dom'
import * as routesNames from '../../constants/routes'
import {CustomButton, CustomToast, Loader} from '../../components'
import {base64ToString, getItem, setItem, toBase64} from '../../utilities/authUtils'
import {ActionCreators} from '../../redux/actions'
import {uploadData} from '../../services/uploadServices'
import MyDiv from './addOrganization.style'

const USERID = +base64ToString(getItem('userId'))

const AddOrganization = (props) => {

  const navigate = useNavigate()
  const {handleSubmit, register, formState: {errors}} = useForm()
  const masterState = useSelector((state) => state.masterState)
  const settingState = useSelector((state) => state.settingState)
  const [uploadImage, setImageUpload] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [imageData, setImageData] = useState('')
  const {addToast} = CustomToast()
  const imageRef = useRef()

  useEffect(() => {
    if (settingState?.addOrganization?.data?.meta?.status === 'success') {
      addToast({message: settingState?.addOrganization?.data?.meta?.message, status: 'success'})
      setItem('orgId', toBase64(settingState?.addOrganization?.data?.responce?.org_id))
      navigate(routesNames.SETTINGS)
    } else if (settingState?.addOrganization?.error?.meta?.status === 'failure') {
      addToast({message: settingState?.addOrganization?.error?.meta?.message, status: 'error'})
    }
  }, [settingState?.addOrganization])

  useEffect(() => {
    return () => {
      props?.actions?.cleanUpToast()
    }
  }, [])

  const showOpenFileDialog = () => {
    imageRef.current.click()
  }

  const onChangeImage = (e) => {
    const formData = new FormData()
    formData.append('image', e.target.files[0])
    formData.append('type', 'org-image')
    setIsLoading(true)
    uploadData(formData).then((res) => {
      setIsLoading(false)
      if (res?.data?.meta?.status === 'success') {
        addToast({message: res?.data?.meta?.message, status: 'success'})
        setImageUpload(e.target.files[0])
        setImageData(res?.data?.responce?.filename)
      } else if (res?.error?.meta?.status === 'failure') {
        addToast({message: res?.error?.meta?.message, status: 'error'})
      }
    }).catch((error) => {
      addToast({message: error, status: 'error'})
      setIsLoading(false)
    })
  }

  const onSubmit = (values) => {
    let organizationData = {
      email: values.email,
      company_name: values.company_name,
      phone_number: values.phoneNumber,
      country_id: values.country,
      address1: values.address,
      address2: values.city,
      zipcode: values.zipcode,
      vat_number: values.vat_number,
      company_logo: imageData,
      how_often_pay_vat: values.payVat,
      added_by: USERID,
    }
    props.actions.addOrganizationAction(organizationData)
  }

  return (
    <MyDiv>
      {(masterState?.getMasterData?.loading || isLoading || settingState?.addOrganization?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="main_wrapper">
        <Heading as="h1" className="font_dm font_dark text_bold text_xl page_heading">Add Account</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid className="grid_container">
            <GridItem>
              <Box mb={7}>
                <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={4}>Name and address</Heading>
                <Box mb={3}>
                  <FormControl isInvalid={errors.company_name}>
                    <FormLabel htmlFor="company_name" className="font_dm font_label label_text text_medium" mb={1.5}>Company name</FormLabel>
                    <Input size="md" id="company_name" name="company_name" type="text" placeholder="Company Name"
                      {...register('company_name', {required: 'Company Name Required', pattern: {
                        value: /^[a-zA-Z ]+$/,
                        message: 'No special and numeric characters allowed',
                      }})} className="input_box font_dark font_dm label_text text_medium"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.company_name && errors.company_name.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box mb={3}>
                  <FormControl>
                    <FormLabel htmlFor="country" className="font_dm font_label label_text text_medium" mb={1.5}>Country</FormLabel>
                    <Select placeholder="Select country" name="country" variant="filled"
                      {...register('country')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      {masterState?.getMasterData?.data?.responce?.country?.map((item) => {
                        return (
                          <option key={item.country_id} value={item.country_id}>{item.country_name}</option>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Box mb={3}>
                  <FormControl>
                    <FormLabel htmlFor="address" className="font_dm font_label label_text text_medium" mb={1.5}>Address</FormLabel>
                    <Input size="md" id="address" name="address" type="text" placeholder="Address"
                      {...register('address')} className="input_box font_dark font_dm label_text text_medium"
                    />
                    <Grid templateColumns="150px 1fr" gap={4} mt={2}>
                      <Input size="md" id="zipcode" name="zipcode" type="number" placeholder="Zip Code"
                        {...register('zipcode')} className="input_box font_dark font_dm label_text text_medium"
                      />
                      <Input size="md" id="city" name="city" type="text" placeholder="City"
                        {...register('city')} className="input_box font_dark font_dm label_text text_medium"
                      />
                    </Grid>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isInvalid={errors.vat_number}>
                    <FormLabel htmlFor="vat_number" className="font_dm font_label label_text text_medium" mb={1.5}>Vat Number</FormLabel>
                    <Input size="md" id="vat_number" name="vat_number" type="text" placeholder="Vat Number"
                      {...register('vat_number', {required: 'Vat Number Required'})} className="input_box font_dark font_dm label_text text_medium"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.vat_number && errors.vat_number.message}</FormErrorMessage>
                  </FormControl>
                </Box>
              </Box>
              <Box>
                <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={4}>Contact information</Heading>
                <Box mb={4}>
                  <FormControl isInvalid={errors.phoneNumber}>
                    <FormLabel htmlFor="phoneNumber" className="font_dm font_label label_text text_medium" mb={1.5}>Phone number</FormLabel>
                    <Input size="md" id="phoneNumber" name="phoneNumber" type="number" placeholder="Phone Number"
                      {...register('phoneNumber', {required: 'Phone Number Required', maxLength: {value: 11, message: 'Please Enter Correct Number, Maximum 11 digits allowed'}})}
                      className="input_box font_dark font_dm label_text text_medium"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email" className="font_dm font_label label_text text_medium" mb={1.5}>Email</FormLabel>
                    <Input size="md" id="email" name="email" type="email" placeholder="Email"
                      {...register('email', {required: 'Email Required'})} className="input_box font_dark font_dm label_text text_medium"
                    />
                    <FormErrorMessage className="font_inter label_text text_medium">{errors.email && errors.email.message}</FormErrorMessage>
                  </FormControl>
                </Box>
              </Box>
            </GridItem>
            <GridItem>
              <Box mb={7}>
                <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={4}>Logo</Heading>
                <FormControl>
                  <Box onClick={showOpenFileDialog} className="upload_box">
                    {uploadImage &&
                    <Image src={uploadImage ? URL.createObjectURL(uploadImage) : null} className={uploadImage ? 'uploaded_image' : ''} />
                    }
                    <Box className="rounded" />
                    <CustomButton className="upload_button text_medium font_dm" title="Upload your logo" />
                  </Box>
                  <Input size="md" id="upload" name="upload" type="file" accept="image/*" onChange={onChangeImage}
                    className="input_box font_dark font_dm label_text label_text text_medium d-none" ref={imageRef}
                  />
                </FormControl>
              </Box>
              <Box>
                <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={4}>Accounting</Heading>
                <Box>
                  <FormControl>
                    <FormLabel htmlFor="payVat" className="font_dm font_label label_text text_medium" mb={1.5}>How often do you pay VAT</FormLabel>
                    <Select placeholder="Select" name="payVat" variant="outline"
                      {...register('payVat')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      {masterState?.getMasterData?.data?.responce?.how_often_pay_wat?.map((item) => {
                        return (
                          <option key={item.how_often_pay_wat_id} value={item.how_often_pay_wat_id}>{item.how_often_pay_wat_name}</option>
                        )
                      })}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </GridItem>
          </Grid>
          <Box className="flex_items">
            <CustomButton size="md" type="submit" title="Submit" className="btn_main text_medium font_dm" />
          </Box>
        </form>
      </Box>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(AddOrganization)
