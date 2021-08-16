import { Box } from '@chakra-ui/react'

import { ContainerProps } from './types'
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Box w="100%" h="90%">
      {children}
    </Box>
  )
}

export default Container
