import React, {useState} from 'react'
import {Box, Flex, Heading, IconButton, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr} from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {CustomButton} from '../../../components'
import DeleteIcon from '../../../images/delete.png'
import CopyIcon from '../../../images/copy.png'
import EditIcon from '../../../images/edit.png'
import * as routesNames from '../../../constants/routes'
import CreateSalaries from '../CreateSalaries'
import MyDiv from './salariesListing.style'

const usersData = [
  {
    id: 1,
    name: 'Budget 2',
    createdAt: '10.01.23',
    role: 'admin',
    status: 1,
  },
  {
    id: 2,
    name: 'Budget 1',
    createdAt: '10.01.23',
    role: 'Owner',
    status: 2,
  },
  {
    id: 3,
    name: 'My First Budget',
    createdAt: '10.01.23',
    role: 'admin',
    status: 2,
  },
]

export default function SalariesListing() {

  const navigate = useNavigate()
  const [visibleModal, setVisibleModal] = useState()
  const {handleSubmit, register, formState: {errors, isSubmitting}} = useForm()

  const handleEdit = () => {
    navigate(routesNames.EDITSALARIES)
  }

  const handleModal = () => {
    setVisibleModal(!visibleModal)
  }

  function onSubmit(values) {
    console.log('Form Submitted', values)
  }

  return (
    <MyDiv>
      <Box className="main_wrapper">
        <Flex className="page_heading">
          <Heading as="h1" className="font_dm font_dark text_bold text_xl">Salaries</Heading>
          <Spacer />
          <CustomButton onClick={handleModal} leftIcon={<AddIcon className="add" />} size="md" type="submit" title="Add Salary" className="btn_main text_medium font_dm" />
        </Flex>
        <Box className="table_wrapper">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>No.</Th>
                  <Th>Name</Th>
                  <Th>Created</Th>
                  <Th>Progress</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {usersData?.map((item) => {
                  return (
                    <Tr key={item.id}>
                      <Td>
                        <Heading as="h1" className="font_dm font_dark text_regular label_text lh-20 text-left">{item.id}</Heading>
                      </Td>
                      <Td>
                        <Heading as="h1" className="font_dm font_dark text_regular label_text lh-20 text-left">{item.name}</Heading>
                      </Td>
                      <Td><Heading as="h1" className="font_dm font_light text_regular label_text lh-20 text-left">{item.createdAt}</Heading></Td>
                      <Td>
                        <Box className={item.status === 1 ? 'budget_box budget_status_approved' : 'budget_box budget_status_inprogress'}>
                          <Text className={item.status === 1 ? 'budget_text budget_approved' : 'budget_text budget_inprogress'}>{item.status === 1 ? 'Approved' : 'In progress'}</Text>
                        </Box>
                      </Td>
                      <Td>
                        <Flex className="actions">
                          <IconButton onClick={handleEdit} icon={<Image src={EditIcon} className="icon_size" />} />
                          <IconButton icon={<Image src={CopyIcon} className="icon_size" />} />
                          <IconButton icon={<Image src={DeleteIcon} className="icon_size" />} />
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td>
                    <CustomButton onClick={handleModal} leftIcon={<AddIcon className="add" />} size="md" type="submit" title="Add Salaries" className="btn_default text_medium font_dm" />
                  </Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <CreateSalaries visibleModal={visibleModal} handleModal={handleModal} errors={errors} isSubmitting={isSubmitting}
        onSubmit={onSubmit} handleSubmit={handleSubmit} register={register}
      />
    </MyDiv>
  )
}
