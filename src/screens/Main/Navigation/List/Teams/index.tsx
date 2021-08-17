import { Team } from 'components/Cards'

import { TeamsData, TeamsProps } from '../../../types'

const Teams: React.FC<TeamsProps> = ({ onClick, data }) => {
  const handleOnClick = (type: string, id: string) => {
    onClick(type, id)
  }
  return (
    <>
      {data.map((t: TeamsData, index: number) => {
        return (
          <Team
            key={`${index + 1}`}
            img={t.img}
            bg={t.bg}
            members={t.members}
            total={t.total}
            active={t.active}
            team={t.team}
            onClick={() => {
              handleOnClick('team', ` ${index}`)
            }}
          />
        )
      })}
    </>
  )
}

export default Teams
