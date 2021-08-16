export type TeamsData = {
  project: string
  img: string
  bg: string
  members: {
    name: string
    img: string
  }[]
}

export type ProjectsProps = {
  onClick: (type: number, id: string) => void
  data: TeamsData[]
}
