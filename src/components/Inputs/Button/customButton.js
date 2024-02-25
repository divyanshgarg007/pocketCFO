import React from 'react'
import {Button} from '@chakra-ui/react'
export default function CustomButton(props) {
  return (
    <div>
      <Button
        variant={props.variant}
        className={props.className}
        leftIcon={props.leftIcon}
        rightIcon={props.rightIcon}
        size={props.size}
        onClick={props.onClick}
        isDisabled={props.isDisabled}
        type={props.type}
        isLoading={props.isLoading}
      >
        {props.title}
      </Button>
    </div>
  )
}
