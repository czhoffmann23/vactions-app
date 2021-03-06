import { Box, Text } from '@chakra-ui/react'

import { TabItemProps } from './types'

const TabItem: React.FC<TabItemProps> = ({ title, active, onClick }) => {
  const borderBottom = active ? '3px solid #7928CA' : 'none'
  return (
    <Box
      flex="1"
      borderBottom={borderBottom}
      p="10px"
      cursor="pointer"
      onClick={onClick}>
      <Text fontSize="16px" align="center">
        {title}
      </Text>
    </Box>
  )
}

export default TabItem
