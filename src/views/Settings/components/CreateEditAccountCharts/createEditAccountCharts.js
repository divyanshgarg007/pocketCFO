import React from 'react'
import {Box, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text} from '@chakra-ui/react'
import {CustomButton} from '../../../../components'
import MyDiv from './createEditAccountCharts.style'

export default function CreateEditAccountCharts(props) {

  const PopupBox = () => (
    <MyDiv>
      <Box className="popup_container">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font_dm font_dark text_lg text_bold pb-5">Create account</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
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
                  <FormLabel htmlFor="accountNumber" className="font_dm font_label label_text text_medium" mb={1}>Account Number</FormLabel>
                  <Input size="md" id="accountNumber" name="accountNumber" type="text"
                    {...props.register('accountNumber')} className="input_box font_dark font_dm label_text text_medium"
                  />
                  <Text mt={1} className="font_dm font_light small_text text_regular">Used by accountants, and for organizing your accounts</Text>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="accountType" className="font_dm font_label label_text text_medium" mb={1}>Account Type</FormLabel>
                  <Select placeholder="Select" name="accountType" variant="outline"
                    {...props.register('accountType')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    {props.masterState?.getMasterData?.data?.responce?.account_type?.map((item) => {
                      return (
                        <option key={item.account_type_id} value={item.account_type_id}>{item.account_type_name}</option>
                      )
                    })}
                  </Select>
                  <Text mt={1} className="font_dm font_light small_text text_regular">What kind of account is this?</Text>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="vatRate" className="font_dm font_label label_text text_medium" mb={1}>VAT rate</FormLabel>
                  <Select placeholder="Select" name="vatRate" variant="outline"
                    {...props.register('vatRate')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    {props.vatCodeList?.map((item) => {
                      return (
                        <option key={item.vat_code_id} value={item.vat_code_id}>{item.name}</option>
                      )
                    })}
                  </Select>
                  <Text mt={1} className="font_dm font_light small_text text_regular">What VAT rate is applied in the VAT calculations</Text>
                </FormControl>
              </Box>
            </ModalBody>
            <ModalFooter>
              <CustomButton size="md" title="Confirm" type="submit" className="btn_main text_medium font_dm" />
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
