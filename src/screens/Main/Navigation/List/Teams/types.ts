export type TeamsData = {
  project: string
  img: string
  bg: string
  members: {
    name: string
    img: string
  }[]
}

export type TeamsProps = {
  onClick: (type: number, id: string) => void
  data: any[]
}
