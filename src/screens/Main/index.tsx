import { useState } from 'react'
import { Box } from '@chakra-ui/react'

import Empty from 'components/Empty'

import { INIT } from './constant'
import { Header, List } from './Navigation'
import { Data } from './types'

const Main: React.FC = () => {
  const [data, setData] = useState<Data>(INIT)
  return (
    <>
      <Box d="flex" flexDir="column" flex={{ base: '1', lg: '2' }} h="100%">
        <Header />
        <List data={data} setData={setData} />
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
