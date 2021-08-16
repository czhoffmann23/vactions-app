import { Avatar, Box, Flex, Heading } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      paddingBottom="10px">
      <Heading ml="5px">Vacations App</Heading>
      <Box ml="5px">
        <Avatar
          name="Camilo Zepeda"
          w="45px"
          h="45px"
          src="https://bit.ly/dan-abramov"
        />
      </Box>
    </Flex>
  )
}

export default Header
