import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'

import { TabHeader, TabItem, TabList, Tabs } from 'components/Tabs'

import { DataType, ListProps } from '../../types'

import Projects from './Projects'
import Teams from './Teams'
import Users from './Users'

const List: React.FC<ListProps> = ({ data, setData }) => {
  const [selected, setSelected] = useState<string>('all')
  const handleItem = (item: string) => {
    setSelected(item)
  }

  const handleCardClicked = (type: string, id: string) => {
    const tempData = { ...data }
    const actualType = type as DataType
    const actualId = parseInt(id)
    tempData[actualType].data[actualId].active =
      !tempData[actualType].data[actualId].active
    setData(tempData)
  }

  const renderList = () => {
    if (selected === 'all')
      return <Projects onClick={handleCardClicked} data={data.all.data} />
    else if (selected === 'team')
      return <Teams onClick={handleCardClicked} data={data.team.data} />
    else return <Users onClick={handleCardClicked} data={data.users.data} />
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
