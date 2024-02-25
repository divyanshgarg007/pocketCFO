import React from 'react'
import {Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, IconButton, Image, Input, Select, Text} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import CloseIcon from '../../../../images/collapse.png'
import ArrowIcon from '../../../../images/up.png'
import {CustomButton} from '../../../../components'
import MyDiv from './editBudgetGroupSidebar.style'

export default function EditBudgetGroupSidebar(props) {

  const PopupBox = () => (
    <MyDiv>
      <DrawerOverlay />
      <DrawerContent>
        <Box className="actions_group">
          <IconButton onClick={props.handleSidebar} className="btn_action close" icon={<Image src={CloseIcon} className="icon_size" />} />
          {/* <span>|</span> */}
          <IconButton className="btn_action" icon={<Image src={ArrowIcon} className="icon_size" />} />
          <IconButton className="btn_action down" icon={<Image src={ArrowIcon} className="icon_size" />} />
        </Box>
        <DrawerHeader className="font_dm font_dark text_lg text_bold" pb={0}>1010 - Salg af varer/ydelser m/moms</DrawerHeader>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <DrawerBody pt={0}>
            <Text className="font_dm font_light label_text text_medium">January</Text>
            <Box className="form_wrapper">
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="billing" className="font_dm font_label label_text text_medium" mb={1}>Billing frequency</FormLabel>
                  <Select placeholder="Select" name="billing" variant="outline"
                    {...props.register('billing')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                  </Select>
                  <Text mt={1} className="font_dm font_light small_text text_regular">When do you invoice your customers?</Text>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="payments" className="font_dm font_label label_text text_medium" mb={1}>Payment terms</FormLabel>
                  <Select placeholder="Select" name="payments" variant="outline"
                    {...props.register('payments')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                  </Select>
                  <Text mt={1} className="font_dm font_light small_text text_regular">How long does it take before you get the money.</Text>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="vatRate" className="font_dm font_label label_text text_medium" mb={1}>VAT rate</FormLabel>
                  <Input size="md" id="vatRate" name="vatRate" type="text" value="daniel.manar@company.com" isDisabled
                    {...props.register('vatRate')} className="input_box font_dark font_dm label_text text_medium isDisable"
                  />
                  <Text mt={1} className="font_dm font_light small_text text_regular">The VAT rate on your revenue</Text>
                </FormControl>
              </Box>
              <Box mb={3}>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <FormLabel htmlFor="payment" className="font_dm font_label label_text text_medium" mb={1}>Payment</FormLabel>
                    <Input size="md" id="payment" name="payment" type="text" value="25%"
                      {...props.register('payment')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="bank" className="font_dm font_label label_text text_medium" mb={1}>Bank</FormLabel>
                    <Select placeholder="Select" name="bank" variant="outline"
                      {...props.register('bank')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                    </Select>
                    <Text mt={1} className="font_dm font_light small_text text_regular">The VAT rate on your revenue</Text>
                  </FormControl>
                </Flex>
              </Box>
              <Box>
                <CustomButton leftIcon={<AddIcon className="add" />} size="md" type="submit" title="Add payment line" className="btn_default text_medium font_dm" />
              </Box>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <CustomButton size="md" isLoading={props.isSubmitting} title="Save" className="btn_main text_medium font_dm" />
          </DrawerFooter>
        </form>
      </DrawerContent>
    </MyDiv>
  )

  return (
    <Drawer
      isOpen={props.openSidebar}
      placement="right"
      onClose={props.handleSidebar}
      size={'md'}
    >
      {PopupBox()}
    </Drawer>
  )
}
