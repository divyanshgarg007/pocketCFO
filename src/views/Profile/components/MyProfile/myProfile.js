/* eslint-disable no-unused-vars */
import React, {useState, useRef, useEffect} from 'react'
import {Box, Divider, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import EditIcon from '../../../../images/edit.png'
import {CustomButton, CustomToast, Loader} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import UserImage from '../../../../images/user-image.png'
import {uploadData} from '../../../../services/uploadServices'
import MyDiv from './myProfile.style'

const MyProfile = (props) => {

  const profileState = useSelector((state) => state.profileState)
  const {handleSubmit, register, reset, formState: {errors}} = useForm()
  const {addToast} = CustomToast()
  const [uploadImage, setImageUpload] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [imageData, setImageData] = useState('')
  const imageRef = useRef()

  useEffect(() => {
    if (profileState?.getUserProfile?.loading === false) {
      props.actions.getUserDetailsAction()
    }
  }, [])

  useEffect(() => {
    if (profileState?.getUserProfile?.data?.meta?.status === 'success') {
      const value = profileState?.getUserProfile?.data?.responce
      reset({
        name: value?.user_name,
        phoneNumber: value?.phone_number,
        email: value?.email,
      })
    }
  }, [profileState?.getUserProfile])

  useEffect(() => {
    if (profileState?.updateProfile?.data?.meta?.status === 'success') {
      addToast({message: profileState?.updateProfile?.data?.meta?.message, status: 'success'})
    } else if (profileState?.updateProfile?.error?.meta?.status === 'failure') {
      addToast({message: profileState?.updateProfile?.error?.meta?.message, status: 'error'})
    }
  }, [profileState?.updateProfile])


  const showOpenFileDialog = () => {
    imageRef.current.click()
  }

  const onChangeImage = (e) => {
    const formData = new FormData()
    formData.append('image', e.target.files[0])
    formData.append('type', 'profile-image')
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

  function onSubmit(values) {
    let profileData = {
      user_name: values.name,
      email: values.email,
      phone_number: values.phoneNumber,
      profile_image: imageData,
      old_password: values.oldpassword,
      new_password: values.newpassword,
    }
    props.actions.updateProfileAction(profileData)
  }

  return (
    <MyDiv>
      {(isLoading || profileState?.getUserProfile?.loading || profileState?.updateProfile?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid className="grid_container" mb={7}>
          <GridItem>
            <Box>
              <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={4}>My Settings</Heading>
              <Box mb={3}>
                <FormControl isInvalid={errors.name}>
                  <FormLabel htmlFor="name" className="font_dm font_label label_text text_medium" mb={1.5}>Full Name</FormLabel>
                  <Input size="md" id="name" name="name" type="text"
                    {...register('name', {required: 'Name Required', pattern: {
                      value: /^[a-zA-Z ]+$/,
                      message: 'No special and numeric characters allowed',
                    }})} className="input_box font_dark font_dm label_text text_medium"
                  />
                  <FormErrorMessage className="font_inter label_text text_medium">{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="email" className="font_dm font_label label_text text_medium" mb={1.5}>Email</FormLabel>
                  <InputGroup>
                    <InputRightElement
                      className="icon_box"
                      pointerEvents="none"
                      children={<Image src={EditIcon} className="icon_size" />}
                    />
                    <Input size="md" id="email" name="email" type="email" isDisabled
                      {...register('email')} className="input_box font_dark font_dm label_text text_medium isDisable"
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box>
                <FormControl isInvalid={errors.phoneNumber}>
                  <FormLabel htmlFor="phoneNumber" className="font_dm font_label label_text text_medium" mb={1.5}>Phone Number</FormLabel>
                  <Input size="md" id="phoneNumber" name="phoneNumber" type="phoneNumber" className="input_box font_dark font_dm label_text text_medium"
                    {...register('phoneNumber', {required: 'Phone Number Required', maxLength: {value: 11, message: 'Please Enter Correct Number, Maximum 11 digits allowed'}})}
                  />
                  <FormErrorMessage className="font_inter label_text text_medium">{errors.phoneNumber && errors.phoneNumber.message}</FormErrorMessage>
                </FormControl>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={7}>Picture</Heading>
              <FormControl>
                <Box className="upload_box">
                  {uploadImage ?
                    <Image src={uploadImage ? URL.createObjectURL(uploadImage) : null} className={uploadImage ? 'uploaded_image' : ''} />
                    : <Image src={process.env.REACT_APP_BASE_URL + profileState?.getUserProfile?.data?.responce?.profile_image} className="uploaded_image" />
                  }
                </Box>
                <CustomButton className="upload_button text_medium font_dm" title="Change" onClick={showOpenFileDialog} />
                <Input size="md" id="upload" name="upload" type="file" accept="image/*" onChange={onChangeImage}
                  className="input_box font_dark font_dm label_text label_text text_medium d-none" ref={imageRef}
                />
              </FormControl>
            </Box>
          </GridItem>
        </Grid>
        <Divider />
        <Grid mt={5} className="grid_container">
          <GridItem>
            <Box>
              <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={4}>Change password</Heading>
              <Box mb={4}>
                <FormControl>
                  <FormLabel htmlFor="oldpassword" className="font_dm font_label label_text text_medium" mb={1.5}>Old password</FormLabel>
                  <Input size="md" id="oldpassword" name="oldpassword" type="password"
                    {...register('oldpassword')} className="input_box font_dark font_dm label_text text_medium"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel htmlFor="newpassword" className="font_dm font_label label_text text_medium" mb={1.5}>New password</FormLabel>
                  <Input size="md" id="newpassword" name="newpassword" type="password"
                    {...register('newpassword')} className="input_box font_dark font_dm label_text text_medium"
                  />
                </FormControl>
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <Box className="flex_items">
          <CustomButton size="md" type="submit" title="Save Changes" className="btn_main text_medium font_dm" />
        </Box>
      </form>
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(MyProfile)
