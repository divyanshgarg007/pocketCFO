/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {Box, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
  ModalOverlay, Select, Spacer} from '@chakra-ui/react'
import {CustomButton, CustomDatePicker} from '../../../components'
import CalenderIcon from '../../../images/calender.png'
import MyDiv from './createBudget.style'

export default function CreateBudget(props) {

  const [startDate, setStartDate] = useState(new Date())

  const PopupBox = () => (
    <MyDiv>
      <Box>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="pb-5">
            <Input size="md" id="budgetName" name="budgetName" type="text" placeholder="Add budget name"
              {...props.register('budgetName')} className="budget_input font_dm text_bold"
            />
          </ModalHeader>
          <ModalCloseButton className="close" />
          <ModalBody>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
              <Box mb={4}>
                <Flex className="flex_items">
                  <FormControl>
                    <FormLabel htmlFor="fromdate" className="font_dm font_label label_text text_medium" mb={1}>From date</FormLabel>
                    <Box className="date_picker">
                      <CustomDatePicker startDate={startDate} onChange={(date) => setStartDate(date)} dateFormat="MMM yyyy" showMonthYearPicker />
                      <Image className="icon_size" src={CalenderIcon} />
                    </Box>
                  </FormControl>
                  <Spacer />
                  <FormControl>
                    <FormLabel htmlFor="goes" className="font_dm font_label label_text text_medium" mb={1}>No. of months</FormLabel>
                    <Select placeholder="Select" name="goes" variant="outline"
                      {...props.register('goes')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>12</option>
                      <option>11</option>
                    </Select>
                  </FormControl>
                </Flex>
              </Box>
              <Divider />
              <Heading as="h1" className="font_dm font_dark text_regular heading">Connected moduls</Heading>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="goes" className="font_dm font_label label_text text_medium" mb={1}>Salary budget</FormLabel>
                  <Select placeholder="Select" name="goes" variant="outline"
                    {...props.register('goes')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    <option>Contributor</option>
                    <option>Accounting</option>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="goes" className="font_dm font_label label_text text_medium" mb={1}>Investment budget</FormLabel>
                  <Select placeholder="Select" name="goes" variant="outline"
                    {...props.register('goes')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    <option>Contributor</option>
                    <option>Accounting</option>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="goes" className="font_dm font_label label_text text_medium" mb={1}>Loans and capital</FormLabel>
                  <Select placeholder="Select" name="goes" variant="outline"
                    {...props.register('goes')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    <option>Contributor</option>
                    <option>Accounting</option>
                  </Select>
                </FormControl>
              </Box>
            </form>
          </ModalBody>
          <ModalFooter>
            <CustomButton size="md" isLoading={props.isSubmitting} title="Confirm" className="btn_main text_medium font_dm" />
          </ModalFooter>
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
