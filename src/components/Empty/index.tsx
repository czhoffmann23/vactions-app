import { Box, Heading, Text } from '@chakra-ui/react'
import { Board } from 'assets/svg'

const Empty: React.FC = () => {
  return (
    <Box
      h="100%"
      p="20px"
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center">
      <Board />
      <Heading mb="10px">Lorem ipsum</Heading>
      <Text>Lorea el ipsum</Text>
    </Box>
  )
}

export default Empty
