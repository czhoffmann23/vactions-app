import { Box } from '@chakra-ui/react'

import Empty from 'components/Empty'

import { INIT } from './constant'
import { Header, List } from './Navigation'

const Main: React.FC = () => {
  return (
    <>
      <Box d="flex" flexDir="column" flex={{ base: '1', lg: '2' }} h="100%">
        <Header />
        <List data={INIT} />
      </Box>
      <Box
        d={{ base: 'none', lg: 'initial' }}
        flex={{ base: '1', lg: '6' }}
        border="1px solid green">
        <Empty />
      </Box>
    </>
  )
}

export default Main
