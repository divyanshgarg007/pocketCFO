import React, {useState} from 'react'
import {Box, Flex, Grid, GridItem, Heading, Image, Spacer, Text} from '@chakra-ui/react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {CustomButton} from '../../../../components'
import DragIcon from '../../../../images/drag-icon.png'
import MappingIcon from '../../../../images/mapping.png'
import MyDiv from './accountChartsMapping.style'

const data = [
  {
    id: 1,
    title: 'Revenue',
    items: [
      {
        id: 11,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 12,
        title: '102635 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 2,
    title: 'Direct Cost',
    items: [
      {
        id: 21,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 22,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 3,
    title: 'Salaries',
    items: [
      {
        id: 31,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 32,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 33,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 4,
    title: 'Interest Cost',
    items: [
      {
        id: 41,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 42,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 43,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 5,
    title: 'Administration cost',
    items: [
      {
        id: 51,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 52,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 53,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
]
const dataFinal = [
  {
    id: 101,
    title: 'Revenue',
    items: [
      {
        id: 1011,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1012,
        title: '102635 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 102,
    title: 'Direct Cost',
    items: [
      {
        id: 1021,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1022,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 103,
    title: 'Salaries',
    items: [
      {
        id: 1031,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1032,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1033,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 104,
    title: 'Interest Cost',
    items: [
      {
        id: 1041,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1042,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1043,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
  {
    id: 105,
    title: 'Administration cost',
    items: [
      {
        id: 1051,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1052,
        title: '1026 - Sale of services to the EU',
      },
      {
        id: 1053,
        title: '1026 - Sale of services to the EU',
      },
    ],
  },
]

export default function AccountChartsMapping() {

  const [dragItems, setDragItems] = useState(data)

  const onDragEnd = (result) => {
    const newItems = Array.from(dragItems)
    const [removed] = newItems.splice(result?.source?.index, 1)
    newItems?.splice(result?.destination?.index, 0, removed)
    setDragItems(newItems)
    console.log(result, 'result')
  }

  return (
    <MyDiv>
      <Box className="mapping_header">
        <Heading as="h1" className="font_dm font_dark text_bold text_lg" mb={2}>Mapping</Heading>
        <Flex alignItems="center">
          <Box>
            <Text className="font_dm font_dark text_regular label_text">
              On the left, we show the accounts that couldn't be mapped automatically.
            </Text>
            <Text className="font_dm font_dark text_regular label_text">
              To map the accounts, simply drag them from the left side to the appropriate account on the right.
            </Text>
          </Box>
          <Spacer />
          <Box className="flex_items">
            <CustomButton size="md" type="submit" title="Cancel" className="btn_light text_medium font_dm" />
            <CustomButton size="md" type="submit" title="Save Mapping" className="btn_main text_medium font_dm" />
          </Box>
        </Flex>
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid className="grid_container">
          <GridItem>
            <Box className="mapping_box">
              <Heading as="h1" className="font_dm font_label text_medium label_text card_heading">Chart of account: 12 left</Heading>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <Box className="mapping_card_wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                    {dragItems?.map((item, index) => {
                      return (
                        <Box className="mapping_card" key={index}>
                          <Heading as="h1" className="font_dm font_dark text_bold label_text">{item?.title}</Heading>
                          {item?.items?.map((elem) => {
                            return (
                              <Draggable key={elem?.id?.toString()} draggableId={elem?.id?.toString()} index={elem?.id}>
                                {(provided, snapshot) => (
                                  <Flex className="mapping_item" ref={provided.innerRef}
                                    snapshot={snapshot}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    <Image className="icon_size" src={DragIcon} />
                                    <Text className="font_dm font_dark text_regular label_text">{elem?.title}</Text>
                                  </Flex>
                                )}
                              </Draggable>
                            )
                          })}
                        </Box>
                      )
                    })}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
              <Image src={MappingIcon} className="mapping_icon" />
            </Box>
          </GridItem>
          <GridItem>
            <Box className="mapping_box">
              <Heading as="h1" className="font_dm font_label text_medium label_text card_heading">Mapping</Heading>
              <Droppable droppableId="droppable1">
                {(provided) => (
                  <Box className="mapping_card_wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                    <Grid className="grid_inner_container">
                      {dataFinal?.map((item, index) => {
                        return (
                          <Box className="mapping_card" key={index}>
                            <Heading as="h1" className="font_dm font_dark text_bold label_text">{item?.title}</Heading>
                            {item?.items?.map((elem) => {
                              return (
                                <Draggable key={elem?.id?.toString()} draggableId={elem?.id?.toString()} index={elem?.id}>
                                  {(provided, snapshot) => (
                                    <Flex className="mapping_item" ref={provided.innerRef}
                                      snapshot={snapshot}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <Image className="icon_size" src={DragIcon} />
                                      <Text className="font_dm font_dark text_regular label_text">{elem?.title}</Text>
                                    </Flex>
                                  )}
                                </Draggable>
                              )
                            })}
                          </Box>
                        )
                      })}
                    </Grid>
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </Box>
          </GridItem>
        </Grid>
      </DragDropContext>

    </MyDiv>
  )
}
