import React, {useState} from 'react'
import {Box, Flex, FormLabel, Heading, IconButton, Image, Spacer, Switch, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {ChevronDownIcon, ChevronLeftIcon, ChevronUpIcon} from '@chakra-ui/icons'
import DownloadIcon from '../../../images/download.png'
import {CustomBreadcrumb, CustomButton, TextBox} from '../../../components'
import TrelloIcon from '../../../images/trello.png'
import EditIcon from '../../../images/edit_line.png'
import MoreIcon from '../../../images/dots.png'
import {EditSalariesGroupSidebar} from '../components'
import MyDiv from './editSalaries.style'

const breadcrumbs = [
  {
    id: 1,
    name: 'Salaries',
    isCurrentPage: false,
  },
  {
    id: 2,
    name: 'My Salary Budget',
    isCurrentPage: true,
  },
]

const tableData = [
  {
    id: 1,
    label: 'Management',
    tableRowData: [
      {
        id: 11,
        label: 'Sara',
      },
      {
        id: 12,
        label: 'Oliver',
      },
      {
        id: 13,
        label: 'Christian',
      },
    ],
    tableFooterData: [
      {
        id: 1,
        footerLabel: 'Mangement in total',
        jan: 250.00,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 100,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0,
      },
    ],
  },
  {
    id: 2,
    label: 'Customer care',
    tableRowData: [
      {
        id: 21,
        label: 'New hire',
      },
      {
        id: 22,
        label: 'New hire',
      },
      {
        id: 23,
        label: 'New hire',
      },
      {
        id: 24,
        label: 'New hire',
      },
    ],
    tableFooterData: [
      {
        id: 2,
        footerLabel: 'Customer care in total',
        jan: 1250.00,
        feb: 100,
        mar: 0,
        apr: 200,
        may: 100,
        jun: 0,
        jul: 400,
        aug: 0,
        sep: 0,
        oct: 0,
        nov: 0,
        dec: 0,
      },
    ],
  },
]

export default function EditSalaries() {

  const [openSidebar, setOpenSidebar] = useState(false)
  const [collapseBudget, setCollapseBudget] = useState([])
  const [collpaseBudgetGroup, setCollapseBudgetGroup] = useState(false)
  const [checkSwitch, setCheckSwitch] = useState(false)
  const {handleSubmit, register, formState: {errors, isSubmitting}} = useForm()

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar)
  }

  const handleCollapse = (id) => {
    let collapseIndex = collapseBudget.find((item) => item === id) // returns true if element is found
    if (collapseIndex) {
      setCollapseBudget(collapseBudget?.filter((item) => item !== id)) // we remove the element if it exists in the collapseBudget state
    } else {
      setCollapseBudget([...collapseBudget, id]) // we add the current id to the collapseBudget state here
    }
  }

  const handleShowHide = () => {
    setCollapseBudgetGroup(!collpaseBudgetGroup)
  }

  function onSubmit(values) {
    console.log('Form Submitted', values)
  }

  const handleSwitch = (e) => {
    setCheckSwitch(e.target.checked)
  }

  return (
    <MyDiv>
      <Box className="main_wrapper">
        <Heading as="h1" className="font_dm font_dark text_bold text_xl page_heading">My Salary Budget</Heading>
        <Box className="breadcrumb">
          <CustomBreadcrumb breadcrumbs={breadcrumbs} />
        </Box>
        <Flex alignItems="center">
          <Flex className="switch_box">
            <Switch size="md" className="switch_check" onChange={handleSwitch} />
            <FormLabel className="font_dm font_dark label_text text_regular m-0">Show actual numbers</FormLabel>
          </Flex>
          <Spacer />
          <Box className="flex_items">
            <IconButton className="icon_button" icon={<Image src={EditIcon} className="icon_size" />} />
            <IconButton className="icon_button" icon={<Image src={DownloadIcon} className="icon_size" />} />
            <IconButton className="icon_button" icon={<Image src={TrelloIcon} className="icon_size" />} />
            <CustomButton size="md" type="submit" title="Add Employee" className="btn_main text_medium font_dm" />
          </Box>
        </Flex>
      </Box>
      <Box className={checkSwitch ? 'table_wrapper show_actual' : 'table_wrapper'}>
        <TableContainer>
          <Table variant="simple">
            <Thead className={collpaseBudgetGroup ? 'setWidth' : ''}>
              <Tr>
                <Th><IconButton onClick={handleShowHide} className="sidebar_collapse_icon" icon={<ChevronLeftIcon />} /></Th>
                <Th>Jan
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Feb
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Mar
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Apr
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>May
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Jun
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Jul
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Aug
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Sep
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Oct
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Nov
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
                <Th>Dec
                  {checkSwitch ?
                    <Flex className="flex-td justify-td thead_checked">
                      <Text>Budget</Text>
                      <Text>Actual</Text>
                    </Flex> : null
                  }
                </Th>
              </Tr>
            </Thead>
            {tableData?.map((item) => {
              return (
                <Tbody className={collpaseBudgetGroup ? 'setWidth' : ''} key={item.id}>
                  <Tr>
                    <Td>
                      <Flex>
                        <Heading as="h1" className="font_dm font_dark text_bold label_text pt-5">{item.label}</Heading>
                        <Spacer />
                        <IconButton onClick={() => handleCollapse(item.id)} className="toggle_icon" icon={collapseBudget.includes(item.id) ? <ChevronUpIcon /> : <ChevronDownIcon />} />
                      </Flex>
                    </Td>
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                    <Td />
                  </Tr>
                  {!collapseBudget.includes(item.id) ?
                    <>
                      {item?.tableRowData?.map((elem) => {
                        return (
                          <Tr key={elem.id}>
                            <Td><Heading as="h1" className="font_dm font_dark text_medium label_text">{elem.label}</Heading></Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                            <Td>
                              <Flex className="flex-td">
                                <Box className="budget">
                                  <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text" />
                                  <IconButton className="more_btn" onClick={handleSidebar} icon={<Image src={MoreIcon} className="icon_size" />} />
                                </Box>
                                {checkSwitch ?
                                  <Box>
                                    <TextBox size="md" id="text" name="text" type="text" className="input_box font_dm font_dark text_medium label_text actual_input" />
                                  </Box> : null
                                }
                              </Flex>
                            </Td>
                          </Tr>
                        )
                      })}
                    </> : null
                  }
                  {item?.tableFooterData?.map((item) => {
                    return (
                      <Tr className="table_footer" key={item.id}>
                        <Td>{item.footerLabel}</Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.jan}</Text>
                            {checkSwitch ?
                              <Text>{item.jan}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.feb}</Text>
                            {checkSwitch ?
                              <Text>{item.feb}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.mar}</Text>
                            {checkSwitch ?
                              <Text>{item.mar}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.apr}</Text>
                            {checkSwitch ?
                              <Text>{item.apr}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.may}</Text>
                            {checkSwitch ?
                              <Text>{item.may}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.jun}</Text>
                            {checkSwitch ?
                              <Text>{item.jun}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.jul}</Text>
                            {checkSwitch ?
                              <Text>{item.jul}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.aug}</Text>
                            {checkSwitch ?
                              <Text>{item.aug}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.sep}</Text>
                            {checkSwitch ?
                              <Text>{item.sep}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.oct}</Text>
                            {checkSwitch ?
                              <Text>{item.oct}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.nov}</Text>
                            {checkSwitch ?
                              <Text>{item.nov}</Text> : null
                            }
                          </Flex>
                        </Td>
                        <Td>
                          <Flex className="flex-td justify-td total_cost">
                            <Text>{item.dec}</Text>
                            {checkSwitch ?
                              <Text>{item.dec}</Text> : null
                            }
                          </Flex>
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              )
            })}
            <Tfoot className={collpaseBudgetGroup ? 'setWidth' : ''}>
              <Tr>
                <Th>Salaries in total</Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
                <Th>
                  <Flex className="flex-td justify-td total_cost">
                    <Text>100</Text>
                    {checkSwitch ?
                      <Text>100</Text> : null
                    }
                  </Flex>
                </Th>
              </Tr>
            </Tfoot>

          </Table>
        </TableContainer>
      </Box>
      <EditSalariesGroupSidebar handleSidebar={handleSidebar} openSidebar={openSidebar} errors={errors} isSubmitting={isSubmitting}
        onSubmit={onSubmit} handleSubmit={handleSubmit} register={register}
      />
    </MyDiv>
  )
}
