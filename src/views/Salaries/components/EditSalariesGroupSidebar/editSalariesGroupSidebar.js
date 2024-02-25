import React from 'react'
import {Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, IconButton, Image, Input, Select, Text} from '@chakra-ui/react'
import CloseIcon from '../../../../images/collapse.png'
import ArrowIcon from '../../../../images/up.png'
import {CustomButton} from '../../../../components'
import MyDiv from './editSalariesGroupSidebar.style'

export default function EditSalariesGroupSidebar(props) {

  const PopupBox = () => (
    <MyDiv>
      <DrawerOverlay />
      <DrawerContent>
        <Box className="actions_group">
          <IconButton onClick={props.handleSidebar} className="btn_action close" icon={<Image src={CloseIcon} className="icon_size" />} />
          <IconButton className="btn_action" icon={<Image src={ArrowIcon} className="icon_size" />} />
          <IconButton className="btn_action down" icon={<Image src={ArrowIcon} className="icon_size" />} />
        </Box>
        <DrawerHeader className="font_dm font_dark text_lg text_bold" pb={0}>Salary</DrawerHeader>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <DrawerBody pt={0}>
            <Text className="font_dm font_light label_text text_medium">January</Text>
            <Box className="form_wrapper">
              <Box mb={3}>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <FormLabel htmlFor="nr" className="font_dm font_label label_text text_medium" mb={1}>Nr.</FormLabel>
                    <Input size="md" id="nr" name="nr" type="text" value="1" isDisabled
                      {...props.register('nr')} className="input_box font_dark font_dm label_text text_medium isDisable"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="department" className="font_dm font_label label_text text_medium" mb={1}>Department</FormLabel>
                    <Select placeholder="Select" name="department" variant="outline"
                      {...props.register('department')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                    </Select>
                  </FormControl>
                </Flex>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="name" className="font_dm font_label label_text text_medium" mb={1}>Name</FormLabel>
                  <Input size="md" id="name" name="name" type="text" value="Sara"
                    {...props.register('name')} className="input_box font_dark font_dm label_text text_medium"
                  />
                </FormControl>
              </Box>
              <Box mb={3}>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <FormLabel htmlFor="hours" className="font_dm font_label label_text text_medium" mb={1}>Hours</FormLabel>
                    <Input size="md" id="hours" name="hours" type="text" value="160,33"
                      {...props.register('hours')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="salary" className="font_dm font_label label_text text_medium" mb={1}>Salary</FormLabel>
                    <Input size="md" id="salary" name="salary" type="text" value="65.000"
                      {...props.register('salary')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                </Flex>
              </Box>
              <Box mb={3}>
                <FormControl>
                  <FormLabel htmlFor="vacation" className="font_dm font_label label_text text_medium" mb={1}>Vaction scheme</FormLabel>
                  <Select placeholder="Select" name="vacation" variant="outline"
                    {...props.register('vacation')} className="input_box font_dark font_dm label_text text_medium"
                  >
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                  </Select>
                </FormControl>
              </Box>
              <Box mb={3}>
                <FormLabel className="font_dm font_label label_text text_medium" mb={1}>Vaction bonus</FormLabel>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <Select placeholder="Select" name="month" variant="outline"
                      {...props.register('month')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                    </Select>
                    <Text mt={1} className="font_dm font_light small_text text_regular">When is the payout</Text>
                  </FormControl>
                  <FormControl>
                    <Input size="md" id="percent" name="percent" type="text" value="1%"
                      {...props.register('percent')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                </Flex>
              </Box>
              <Box mb={3}>
                <FormLabel className="font_dm font_label label_text text_medium" mb={1}>Company pension</FormLabel>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <Select placeholder="Select" name="pension" variant="outline"
                      {...props.register('pension')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Input size="md" id="pension-percent" name="pension-percent" type="text" value="1%"
                      {...props.register('pension-percent')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                </Flex>
              </Box>
              <Box mb={3}>
                <FormLabel className="font_dm font_label label_text text_medium" mb={1}>Employee pension</FormLabel>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <Select placeholder="Select" name="employee" variant="outline"
                      {...props.register('employee')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Input size="md" id="pension-Employee" name="pension-Employee" type="text" value="1%"
                      {...props.register('pension-Employee')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                </Flex>
              </Box>
              <Box mb={3}>
                <FormLabel className="font_dm font_label label_text text_medium" mb={1}>Other decution</FormLabel>
                <Flex className="flex_items">
                  <FormControl className="rate_box">
                    <Select placeholder="Select" name="deduction_type" variant="outline"
                      {...props.register('deduction_type')} className="input_box font_dark font_dm label_text text_medium"
                    >
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                      <option>one</option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Input size="md" id="deduction_cost" name="deduction_cost" type="text" value="1%"
                      {...props.register('deduction_cost')} className="input_box font_dark font_dm label_text text_medium"
                    />
                  </FormControl>
                </Flex>
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
