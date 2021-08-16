import { Box } from '@chakra-ui/react'

import { TabsProps } from './types'

const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <Box h="100%" w="100%" p="5px">
      {children}
    </Box>
  )
}

export default Tabs
