import { Project } from 'components/Cards'

import { ProjectsProps,TeamsData } from './types'

const Projects: React.FC<ProjectsProps> = ({ onClick, data }) => {
  const handleOnClick = (type: number, id: string) => {
    onClick(type, id)
  }
  return (
    <>
      {data.map((t: TeamsData, index: number) => {
        return (
          <Project
            key={`${index + 1}`}
            img={t.img}
            bg={t.bg}
            members={t.members}
            project={t.project}
            onClick={() => {
              handleOnClick(1, ` ${index}`)
            }}
          />
        )
      })}
    </>
  )
}

export default Projects
