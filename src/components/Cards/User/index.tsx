import { Avatar, Box, Flex, Heading } from '@chakra-ui/react'

import { UserProps } from './types'

const User: React.FC<UserProps> = ({ name, img, bg, onClick, active }) => {
  const bgColor = active ? '#1a202c' : bg
  const txtColor = active ? 'white' : 'black'
  return (
    <Flex
      bg={bgColor}
      m="10px"
      onClick={onClick}
      cursor="pointer"
      flexDir={{ base: 'column', sm: 'row' }}
      h={{ base: '220px', sm: '100px' }}
      borderRadius="16px">
      <Box
        flex={{ base: '8', md: '6' }}
        d="flex"
        justifyContent="center"
        alignItems="center">
        <Avatar name={name} w="45px" h="45px" src={img} />
      </Box>
      <Box
        flex={{ base: '16', md: '18' }}
        d="flex"
        flexDir="column"
        justifyContent="center">
        <Heading fontSize="13px" mb="10px" color={txtColor} noOfLines={1}>
          {name}
        </Heading>
      </Box>
    </Flex>
  )
}

export default User
