import { Box } from '@chakra-ui/react'

import { ContentProps } from './types'

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Box d="flex" flexDir={{ base: 'column', sm: 'row' }} w="100%" h="100%">
      {children}
    </Box>
  )
}

export default Content
