import { Box, Flex } from '@chakra-ui/react'

import { TabHeaderProps } from './types'

const TabHeader: React.FC<TabHeaderProps> = ({ children }) => {
  return (
    <Box h="10%" maxH="50px">
      <Flex justifyContent="space-between">{children}</Flex>
    </Box>
  )
}

export default TabHeader
