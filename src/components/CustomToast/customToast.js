import {useToast} from '@chakra-ui/react'

export default function CustomToast() {

  const toast = useToast()

  const addToast = (props) => {
    const {message, status} = props
    toast({
      position: 'top-right',
      title: message,
      status,
      duration: 3000,
      isClosable: true,
    })
  }

  return {addToast}
}
