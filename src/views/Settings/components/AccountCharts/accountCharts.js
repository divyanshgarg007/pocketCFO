/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import {Box, Flex, IconButton, Image, InputGroup, InputLeftElement, Spacer, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {connect, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ActionCreators} from '../../../../redux/actions'
import {CustomButton, CustomToast, EmptyMessage, Loader, TextBox} from '../../../../components'
import SearchIcon from '../../../../images/search.png'
import DownloadIcon from '../../../../images/download.png'
// import TrelloIcon from '../../../../images/trello.png'
import DeleteIcon from '../../../../images/delete.png'
import EditIcon from '../../../../images/edit.png'
import CreateEditAccountCharts from '../CreateEditAccountCharts'
import {base64ToString, getItem} from '../../../../utilities/authUtils'
import MyDiv from './accountCharts.style'

const USERID = +base64ToString(getItem('userId'))

const AccountCharts = (props) => {

  const settingState = useSelector((state) => state.settingState)
  const masterState = useSelector((state) => state.masterState)
  const [vatCodeList, setVatCodeList] = useState(null)
  const [chartsAccountList, setChartsAccount] = useState(null)
  const [chartAccountId, setChartAccountId] = useState(null)
  const [visibleModal, setVisibleModal] = useState()
  const {handleSubmit, register, reset} = useForm()
  const {addToast} = CustomToast()
  const orgId = getItem('orgId')

  useEffect(() => {
    props.actions.getVatCodesAction()
  }, [orgId])

  useEffect(() => {
    if (settingState?.getChartsOfAccount?.loading === false) {
      props.actions.getChartsAccountAction()
    }
  }, [orgId])

  useEffect(() => {
    if (settingState?.getVatCodes?.data?.meta?.status === 'success') {
      setVatCodeList(settingState?.getVatCodes?.data?.responce)
    }
  }, [settingState?.getVatCodes])

  useEffect(() => {
    if (settingState?.getChartsOfAccount?.data?.meta?.status === 'success') {
      setChartsAccount(settingState?.getChartsOfAccount?.data?.responce)
    }
  }, [settingState?.getChartsOfAccount])

  useEffect(() => {
    if (settingState?.addChartsOfAccount?.data?.meta?.status === 'success') {
      addToast({message: settingState?.addChartsOfAccount?.data?.meta?.message, status: 'success'})
      setVisibleModal(false)
    } else if (settingState?.addChartsOfAccount?.error?.meta?.status === 'failure') {
      addToast({message: settingState?.addChartsOfAccount?.error?.meta?.message, status: 'error'})
    }
  }, [settingState?.addChartsOfAccount])

  useEffect(() => {
    if (settingState?.updateChartsOfAccount?.data?.meta?.status === 'success') {
      addToast({message: settingState?.updateChartsOfAccount?.data?.meta?.message, status: 'success'})
      setVisibleModal(false)
      setChartAccountId(null)
    } else if (settingState?.updateChartsOfAccount?.error?.meta?.status === 'failure') {
      addToast({message: settingState?.updateChartsOfAccount?.error?.meta?.message, status: 'error'})
    }
  }, [settingState?.updateChartsOfAccount])

  useEffect(() => {
    return () => {
      props?.actions?.cleanUpToast()
    }
  }, [])

  const handleModal = () => {
    reset({
      name: '',
      number: '',
      account_type_id: '',
      vat_code_id: '',
    })
    setVisibleModal(!visibleModal)
  }

  const handleEdit = (parentId, childId) => {
    const {list} = chartsAccountList?.find((item) => item?.account_type_id === parentId)
    const formData = list?.find((item) => item.chart_of_account_id === childId)
    setChartAccountId(childId)
    reset({
      name: formData?.name,
      accountNumber: formData?.number,
      accountType: formData?.account_type_id,
      vatRate: formData?.vat_code_id,
    })
    setVisibleModal(!visibleModal)
  }

  function onSubmit(values) {
    if (!(values.name && values.accountNumber && values.accountType && values.vatRate)) {
      addToast({message: 'Please fill the fields', status: 'warning'})
      return
    }
    const chartsAccountData = {
      name: values.name,
      number: values.accountNumber.toString(),
      account_type_id: Number(values.accountType),
      vat_code_id: Number(values.vatRate),
      added_by: USERID,
      modified_by: USERID,
    }
    if (chartAccountId) {
      const editData = {...chartsAccountData, chart_of_account_id: chartAccountId}
      props.actions.updateChartsAccountAction(editData)
    } else {
      props.actions.addChartsAccountAction(chartsAccountData)
    }
  }

  return (
    <MyDiv>
      {(settingState?.getChartsOfAccount?.loading || settingState?.getVatCodes?.loading || settingState?.addChartsOfAccount?.loading || settingState?.updateChartsOfAccount?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Flex mb={6} className="mobile_flex">
        <InputGroup>
          <InputLeftElement
            className="icon_box"
            pointerEvents="none"
            children={<Image src={SearchIcon} className="icon_size" />}
          />
          <TextBox size="md" id="company" name="company" type="text" placeholder="Search for nb. or name" className="input_box font_dm font_light text_medium label_text" />
        </InputGroup>
        <Spacer />
        <Box className="flex_items">
          <IconButton className="icon_button" icon={<Image src={DownloadIcon} className="icon_size" />} />
          {/* <IconButton className="icon_button" icon={<Image src={TrelloIcon} className="icon_size" />} /> */}
          <CustomButton size="md" type="submit" onClick={handleModal} title="Add Account" className="btn_main text_medium font_dm" />
        </Box>
      </Flex>
      {chartsAccountList?.length > 0 && settingState?.getChartsOfAccount?.loading === false ?
        <>
          {chartsAccountList?.map((item) => {
            return (
              <Box className="table_wrapper" key={item.account_type_id}>
                <TableContainer>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th className="w-8">{item.account_number}</Th>
                        <Th className="w-25">{item.account_type_name}</Th>
                        <Th className="w-12" />
                        <Th className="w-42" />
                        <Th className="w-10" />
                      </Tr>
                    </Thead>
                    <Tbody>
                      {item?.list?.map((elem) => {
                        return (
                          <Tr key={elem.chart_of_account_id}>
                            <Td>{elem.number}</Td>
                            <Td>{elem.name}</Td>
                            <Td>{elem.account_type_name}</Td>
                            <Td>{elem.vat_code_name}</Td>
                            <Td>
                              <Flex className="actions">
                                <IconButton icon={<Image src={DeleteIcon} className="icon_size" />} />
                                <IconButton icon={<Image src={EditIcon} className="icon_size" onClick={() => handleEdit(elem.account_type_id, elem.chart_of_account_id)} />} />
                              </Flex>
                            </Td>
                          </Tr>
                        )
                      })}
                    </Tbody>
                    <Tfoot>
                      <Tr>
                        <Th>1099</Th>
                        <Th>{item.account_type_name} in total</Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </Box>
            )
          })}
        </> :
        settingState?.getChartsOfAccount?.loading === false ? <EmptyMessage title="No data found, Please add account" /> : null
      }
      <CreateEditAccountCharts
        visibleModal={visibleModal}
        handleModal={handleModal}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        register={register}
        masterState={masterState}
        vatCodeList={vatCodeList}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(AccountCharts)
