import { Box, Heading } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Box h="15%" w="100%" d="flex" alignItems="center">
      <Heading fontSize="30px" ml="5px">
        Projects
      </Heading>
    </Box>
  )
}

export default Header
