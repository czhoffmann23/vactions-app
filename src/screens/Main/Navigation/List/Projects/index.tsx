import { Project } from 'components/Cards'

import { AllData, ProjectsProps } from '../../../types'

const Projects: React.FC<ProjectsProps> = ({ onClick, data }) => {
  const handleOnClick = (type: string, id: string) => {
    onClick(type, id)
  }
  return (
    <>
      {data.map((p: AllData, index: number) => {
        return (
          <Project
            key={`${index + 1}`}
            img={p.img}
            bg={p.bg}
            active={p.active}
            members={p.members}
            project={p.project}
            onClick={() => {
              handleOnClick('all', ` ${index}`)
            }}
          />
        )
      })}
    </>
  )
}

export default Projects
