import React from 'react'
import {Box, Flex, FormControl, FormLabel, Image, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
  Select, Switch} from '@chakra-ui/react'
import MailIcon from '../../../../images/mail.png'
import {CustomButton} from '../../../../components'
import MyDiv from './addEditUser.style'

export default function AddEditUser(props) {

  const PopupBox = () => (
    <MyDiv>
      <Box className="popup_container">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font_dm font_dark text_lg text_bold pb-5">Invite User</ModalHeader>
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <ModalCloseButton />
            <ModalBody>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="name" className="font_dm font_label label_text text_medium" mb={1}>Name</FormLabel>
                  <Input size="md" id="name" name="name" type="text"
                    {...props.register('name')} className="input_box font_dark font_dm label_text text_medium"
                  />
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="email" className="font_dm font_label label_text text_medium" mb={1}>Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      className="icon_box"
                      pointerEvents="none"
                      children={<Image src={MailIcon} className="icon_size" />}
                    />
                    <Input size="md" id="email" name="email" type="email"
                      {...props.register('email')} className="input_email_box font_dark font_dm label_text text_medium"
                    />
                  </InputGroup>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="userType" className="font_dm font_label label_text text_medium" mb={1}>User Type</FormLabel>
                  <Select placeholder="Select User Type" name="userType" variant="outline"
                    {...props.register('userType')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    {props?.usersType?.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormLabel className="font_dm font_label label_text text_medium" mb={2}>User rights</FormLabel>
                <FormControl className="flex_items">
                  {props?.usersRigts?.map((item) => {
                    return (
                      <Flex className="switch_box" key={item.id}>
                        <Switch size="md" className="switch_check" name="userRight" onChange={() => props.handleChange(item.id)} />
                        <FormLabel className="font_dm font_dark label_text text_regular">{item.name}</FormLabel>
                      </Flex>
                    )
                  })}
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <CustomButton size="md" type="submit" title="Confirm" className="btn_main text_medium font_dm" />
            </ModalFooter>
          </form>
        </ModalContent>
      </Box>
    </MyDiv>
  )

  return (
    <MyDiv>
      <Modal
        isCentered
        onClose={props.handleModal}
        isOpen={props.visibleModal}
        motionPreset="slideInBottom"
        size={'xl'}
      >
        {PopupBox()}
      </Modal>
    </MyDiv>
  )
}
