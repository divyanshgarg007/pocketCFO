import React, {useState, useEffect} from 'react'
import {Box, Flex, Heading, IconButton, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {bindActionCreators} from 'redux'
import {connect, useSelector} from 'react-redux'
import {CustomButton, CustomToast, Loader} from '../../../../components'
import {ActionCreators} from '../../../../redux/actions'
import DeleteIcon from '../../../../images/delete.png'
import EditIcon from '../../../../images/edit.png'
import ProfileImage from '../../../../images/profile.png'
import AddEditUser from '../AddEditUser/addEditUser'
import MyDiv from './users.style'

const Users = (props) => {

  const usersData = [
    {
      id: 1,
      image: ProfileImage,
      name: 'Olivia Rhye',
      email: 'olivia@gmail.com',
      role: 'admin',
      status: 1,
    },
    {
      id: 2,
      image: ProfileImage,
      name: 'Divyansh garg',
      email: 'divyansh@gmail.com',
      role: 'Owner',
      status: 1,
    },
    {
      id: 3,
      image: ProfileImage,
      name: 'Simran Yadav',
      email: 'simran@gmail.com',
      role: 'admin',
      status: 2,
    },
  ]

  const usersType = [
    {
      id: 1,
      name: 'Owner',
    },
    {
      id: 2,
      name: 'Admin',
    },
    {
      id: 3,
      name: 'Contributor',
    },
  ]

  const usersRigts = [
    {
      id: 1,
      name: 'Salary',
    },
    {
      id: 2,
      name: 'Investment',
    },
    {
      id: 3,
      name: 'Loans & Capital',
    },
    {
      id: 4,
      name: 'Settings',
    },
    {
      id: 5,
      name: 'Master budget',
    },
    {
      id: 6,
      name: 'Key numbers',
    },
    {
      id: 7,
      name: 'Liquidity',
    },
    {
      id: 8,
      name: 'User settings',
    },
  ]

  const settingState = useSelector((state) => state.settingState)
  const [visibleModal, setVisibleModal] = useState()
  const [switchValue, setSwitchValue] = useState([])
  const {handleSubmit, register, control, reset} = useForm()
  const {addToast} = CustomToast()

  useEffect(() => {
    if (settingState?.addInviteUser?.data?.meta?.status === 'success') {
      addToast({message: settingState?.addInviteUser?.data?.meta?.message, status: 'success'})
      setVisibleModal(false)
    } else if (settingState?.addInviteUser?.error?.meta?.status === 'failure') {
      addToast({message: settingState?.addInviteUser?.error?.meta?.message, status: 'error'})
    }
  }, [settingState?.addInviteUser])

  useEffect(() => {
    return () => {
      props?.actions?.cleanUpToast()
    }
  }, [])

  const handleModal = () => {
    reset({
      name: '',
      email: '',
      user_type: '',
    })
    setSwitchValue([])
    setVisibleModal(!visibleModal)
  }

  const handleEdit = (id) => {
    setVisibleModal(!visibleModal)
    console.log(id)
  }

  const handleChange = (id) => {
    let checkedIndex = switchValue?.find((item) => item === id) // returns true if element is found
    if (checkedIndex) {
      setSwitchValue(switchValue?.filter((item) => item !== id)) // we remove the element if it exists in the checked state
    } else {
      setSwitchValue([...switchValue, id]) // we add the current id to the checked state here
    }
  }

  function onSubmit(values) {
    if (!(values.name && values.email && values.userType)) {
      addToast({message: 'Please fill the fields', status: 'warning'})
      return
    }
    let userData = {
      name: values.name,
      email: values.email,
      user_type: +(values.userType),
      user_rights: switchValue.toString(),
    }
    props.actions.addInviteUserAction(userData)
  }

  return (
    <MyDiv>
      {(settingState?.addInviteUser?.loading) &&
      <div>
        <Loader />
      </div>
      }
      <Box className="flex_items" mb={6}>
        <CustomButton size="md" type="submit" title="Invite users" onClick={handleModal} className="btn_main text_medium font_dm" />
      </Box>
      <Box className="table_wrapper">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>User</Th>
                <Th>Role</Th>
                <Th>Status</Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {usersData?.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <Flex className="user_profile">
                        <Box>
                          <Image src={item.image} className="profile_image" />
                        </Box>
                        <Box>
                          <Heading as="h1" className="font_dm font_dark text_regular label_text lh-20 text-left">{item.name}</Heading>
                          <Heading as="h4" className="font_dm font_light text_regular small_text lh-20 text-left">{item.email}</Heading>
                        </Box>
                      </Flex>
                    </Td>
                    <Td>{item.role}</Td>
                    <Td>
                      <Flex className={item.status === 1 ? 'user_box user_status_active' : 'user_box user_status_inactive'}>
                        <Box className={item.status === 1 ? 'rounded rounded_active' : 'rounded rounded_inactive'} />
                        <Text className={item.status === 1 ? 'user_text user_active' : 'user_text user_inactive'}>{item.status === 1 ? 'Active' : 'Inactive'}</Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Flex className="actions">
                        <IconButton icon={<Image src={EditIcon} className="icon_size" />} onClick={() => handleEdit(item.id)} />
                        <IconButton icon={<Image src={DeleteIcon} className="icon_size" />} />
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <AddEditUser visibleModal={visibleModal} handleModal={handleModal} control={control} handleChange={handleChange}
        onSubmit={onSubmit} handleSubmit={handleSubmit} register={register} usersRigts={usersRigts} usersType={usersType}
      />
    </MyDiv>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(null, mapDispatchToProps)(Users)
