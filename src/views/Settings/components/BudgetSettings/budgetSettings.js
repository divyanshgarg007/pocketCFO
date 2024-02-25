import React from 'react'
import {Box, Flex, IconButton, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import EditIcon from '../../../../images/edit.png'
import MyDiv from './budgetSettings.style'

const settingsData = [
  {
    id: 1,
    type: 'Revenue',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 2,
    type: 'Salaries',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 3,
    type: 'Direct cost',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 4,
    type: 'Sales and travel cost',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 5,
    type: 'Car cost',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 6,
    type: 'Local cost',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 7,
    type: 'Fixed assets',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
  {
    id: 8,
    type: 'Operating equipment',
    billing: 'End of the month',
    payementTerms: '8 days',
    paymentAccount: '5810 - Bank',
  },
]

export default function BudgetSettings() {
  return (
    <MyDiv>
      <Box className="table_wrapper">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Billing frequency</Th>
                <Th>Payment terms</Th>
                <Th>Payment account</Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {settingsData?.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.type}</Td>
                    <Td>{item.billing}</Td>
                    <Td>{item.payementTerms}</Td>
                    <Td>{item.paymentAccount}</Td>
                    <Td>
                      <Flex className="actions">
                        <IconButton icon={<Image src={EditIcon} className="icon_size" />} />
                      </Flex>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </MyDiv>
  )
}
