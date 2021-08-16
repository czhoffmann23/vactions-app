import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'

import { TabHeader, TabItem, TabList, Tabs } from 'components/Tabs'

import Projects from './Projects'
import Teams from './Teams'

type ListProps = {
  data: {
    all: {
      data: any[]
      board: any[]
    }
    team: {
      data: any[]
      board: any[]
    }
    users: {
      data: any[]
      board: any[]
    }
  }
  setData: React.Dispatch<React.SetStateAction<any>>
}

const List: React.FC<ListProps> = ({ data, setData }) => {
  const [selected, setSelected] = useState<string>('all')
  const handleItem = (item: string) => {
    setSelected(item)
  }

  const handleCardClicked = (type: number, id: string) => {
    console.log('type', type)
    console.log('card clicked data', data)
    console.log('id', id)
  }

  const renderList = () => {
    if (selected === 'all')
      return <Projects onClick={handleCardClicked} data={data.all.data} />
    else if (selected === 'team')
      return <Teams onClick={handleCardClicked} data={data.team.data} />
    else return 'Users'
  }

  return (
    <Box h="85%" w="100%">
      <Tabs>
        <TabHeader>
          <TabItem
            title="All"
            active={'all' === selected}
            onClick={() => handleItem('all')}
          />
          <TabItem
            title="Team"
            active={'team' === selected}
            onClick={() => handleItem('team')}
          />
          <TabItem
            title="Users"
            active={'users' === selected}
            onClick={() => handleItem('users')}
          />
        </TabHeader>
        <TabList>
          <>{renderList()}</>
        </TabList>
      </Tabs>
    </Box>
  )
}

export default List
