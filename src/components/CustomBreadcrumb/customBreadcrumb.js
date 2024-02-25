import React from 'react'
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react'
import MyDiv from './customBreadcrumb.style'

export default function CustomBreadcrumb(props) {
  return (
    <MyDiv>
      <Breadcrumb>
        {props?.breadcrumbs?.map((item) => {
          return (
            <BreadcrumbItem key={item.id} isCurrentPage={item.isCurrentPage} className="breadcrumb_item">
              <BreadcrumbLink href="#" className="font_dm font_light label_text text_regular">{item.name}</BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </MyDiv>
  )
}
