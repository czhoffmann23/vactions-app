import { Avatar, AvatarGroup, Box, Flex, Heading, Text } from '@chakra-ui/react'

import { MembersProps, TeamProps } from './types'

const Team: React.FC<TeamProps> = ({
  team,
  total,
  img,
  members,
  bg,
  onClick,
  active,
}) => {
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
        <Avatar name={team} w="45px" h="45px" src={img} />
      </Box>
      <Box
        flex={{ base: '16', md: '18' }}
        d="flex"
        flexDir="column"
        justifyContent="center">
        <Heading fontSize="13px" mb="10px" color={txtColor} noOfLines={1}>
          {team}
        </Heading>
        <AvatarGroup size="sm">
          {members.map((m: MembersProps, index: number) => {
            return <Avatar key={`${index + 1}`} name={m.name} src={m.img} />
          })}
        </AvatarGroup>
        <Text fontSize="13px">Total projects : {total} </Text>
      </Box>
    </Flex>
  )
}

export default Team
