import { Box, useTheme } from '@chakra-ui/react'

import { TabListProps } from './types'

const TabList: React.FC<TabListProps> = ({ children }) => {
  const theme = useTheme()
  const { scroll } = theme
  return (
    <Box h="90%" p="5px" overflowY="auto" css={scroll}>
      {children}
    </Box>
  )
}

export default TabList
