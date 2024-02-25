/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {Box, Flex, Heading, IconButton, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../../../redux/actions'
import {CustomButton, CustomToast, EmptyMessage, Loader} from '../../../../components'
import DeleteIcon from '../../../../images/delete.png'
import EditIcon from '../../../../images/edit.png'
import CreateEditVatCodes from '../CreateEditVatCodes/createEditVatCodes'
import {base64ToString, getItem} from '../../../../utilities/authUtils'
import MyDiv from './vatCodes.style'

const goesTo = [
  {
    id: 1,
    name: 'Contributor',
  },
  {
    id: 2,
    name: 'Accounting',
  },
]

const VatCodes = (props) => {

  const USERID = +base64ToString(getItem('userId'))
  const {handleSubmit, register, reset} = useForm()
  const {addToast} = CustomToast()
  const settingState = useSelector((state) => state.settingState)
  const [visibleModal, setVisibleModal] = useState()
  const [vatCodeList, setVatCodeList] = useState()
  const [vatCodeId, setVatCodeId] = useState(null)
  const orgId = getItem('orgId')

  useEffect(() => {
    if (settingState?.getVatCodes?.loading === false) {
      props.actions.getVatCodesAction()
    }
  }, [orgId])

  useEffect(() => {
    if (settingState?.getVatCodes?.data?.meta?.status === 'success') {
      setVatCodeList(settingState?.getVatCodes?.data?.responce)
    }
  }, [settingState?.getVatCodes])

  useEffect(() => {
    if (settingState?.addVatCodes?.data?.meta?.status === 'success') {
      addToast({message: settingState?.addVatCodes?.data?.meta?.message, status: 'success'})
      setVisibleModal(false)
    } else if (settingState?.addVatCodes?.error?.meta?.status === 'failure') {
      addToast({message: settingState?.addVatCodes?.error?.meta?.message, status: 'error'})
    }
  }, [settingState?.addVatCodes])

  useEffect(() => {
    if (settingState?.updateVatCodes?.data?.meta?.status === 'success') {
      addToast({message: settingState?.updateVatCodes?.data?.meta?.message, status: 'success'})
      setVisibleModal(false)
      setVatCodeId(null)
    } else if (settingState?.updateVatCodes?.error?.meta?.status === 'failure') {
      addToast({message: settingState?.updateVatCodes?.error?.meta?.message, status: 'error'})
    }
  }, [settingState?.updateVatCodes])

  useEffect(() => {
    return () => {
      props?.actions?.cleanUpToast()
    }
  }, [])

  const handleModal = () => {
    reset({
      name: '',
      description: '',
      abbreviation: '',
      rate: '',
      goes_to: '',
    })
    setVisibleModal(!visibleModal)
  }

  const handleEdit = (id) => {
    // get current vat code details
    const formData = vatCodeList.find((item) => item.vat_code_id === id)
    setVatCodeId(id)
    //set default form values
    reset({
      name: formData.name,
      description: formData.description,
      abbreviation: formData.abbreviation,
      rate: formData.rate,
      goes: formData.goes_to,
    })
    setVisibleModal(!visibleModal)
  }

  function onSubmit(values) {
    if (!(values.name && values.abbreviation && values.rate && values.description && values.goes)) {
      addToast({message: 'Please fill the fields', status: 'warning'})
      return
    }
    const vatCodesData = {
      name: values.name,
      abbreviation: values.abbreviation,
      rate: values.rate,
      description: values.description,
      goes_to: Number(values.goes),
    }
    if (vatCodeId) {
      const editData = {...vatCodesData, vat_code_id: vatCodeId, modified_by: USERID}
      props.actions.updateVatCodesAction(editData)
    } else {
      props.actions.addVatCodesAction(vatCodesData)
    }
  }

  return (
    <MyDiv>
      {(settingState?.getVatCodes?.loading || settingState?.addVatCodes?.loading || settingState?.updateVatCodes?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="flex_items" mb={6}>
        <CustomButton size="md" type="submit" title="Create" onClick={handleModal} className="btn_main text_medium font_dm" />
      </Box>
      {vatCodeList?.length > 0 && settingState?.getVatCodes?.loading === false ?
        <Box className="table_wrapper">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Abbreviation</Th>
                  <Th>Rate</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {vatCodeList?.map((item) => {
                  return (
                    <Tr key={item.vat_code_id}>
                      <Td>{item.name}</Td>
                      <Td>{item.description}</Td>
                      <Td>{item.abbreviation}</Td>
                      <Td>{item.rate}</Td>
                      <Td>
                        <Flex className="actions">
                          <IconButton icon={<Image src={DeleteIcon} className="icon_size" />} />
                          <IconButton icon={<Image src={EditIcon} className="icon_size" onClick={() => handleEdit(item.vat_code_id)} />} />
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box> :
        settingState?.getVatCodes?.loading === false ? <EmptyMessage title="No data found, Please create vat codes" /> : null
      }
      <CreateEditVatCodes
        visibleModal={visibleModal}
        handleModal={handleModal}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        goesTo={goesTo}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(VatCodes)
