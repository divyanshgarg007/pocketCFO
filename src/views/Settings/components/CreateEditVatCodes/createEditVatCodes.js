import React from 'react'
import {Box, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, Textarea} from '@chakra-ui/react'
import {CustomButton} from '../../../../components'
import MyDiv from './createEditVatCodes.style'

export default function CreateEditVatCodes(props) {

  const PopupBox = () => (
    <MyDiv>
      <Box className="popup_container">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="font_dm font_dark text_lg text_bold pb-5">VAT Rate</ModalHeader>
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
                  <FormLabel htmlFor="description" className="font_dm font_label label_text text_medium" mb={1}>Description</FormLabel>
                  <Textarea size="md" id="description" name="description"
                    {...props.register('description')} className="textarea font_dark font_dm label_text text_medium"
                  />
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="abbreviation" className="font_dm font_label label_text text_medium" mb={1}>Abbreviation</FormLabel>
                  <Input size="md" id="abbreviation" name="abbreviation" type="text"
                    {...props.register('abbreviation')} className="input_box font_dark font_dm label_text text_medium"
                  />
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="rate" className="font_dm font_label label_text text_medium" mb={1}>Rate</FormLabel>
                  <Flex className="flex_items">
                    <Input size="md" id="rate" name="rate" type="text"
                      {...props.register('rate')} className="input_box font_dark font_dm label_text text_medium"
                    />
                    <Text className="font_dark font_dm text_rate text_medium">of the budgeted amount</Text>
                  </Flex>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="goes" className="font_dm font_label label_text text_medium" mb={1}>Goes to</FormLabel>
                  <Select placeholder="Select" name="goes" variant="outline"
                    {...props.register('goes')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    {props?.goesTo?.map((item) => {
                      return (
                        <option key={item.id} value={item.id}>{item.name}</option>
                      )
                    })}
                  </Select>
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
