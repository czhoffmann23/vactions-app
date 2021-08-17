export type MembersData = {
  name: string
  img: string
}

export type TeamsData = {
  team: string
  img: string
  bg: string
  total: number
  members: MembersData[]
  active: boolean
}

export type AllData = {
  project: string
  img: string
  bg: string
  members: MembersData[]
  active: boolean
}

export type UsersData = {
  name: string
  img: string
  bg: string
  active: boolean
}

export type Data = {
  all: {
    data: AllData[]
    board: any[]
  }
  team: {
    data: TeamsData[]
    board: any[]
  }
  users: {
    data: UsersData[]
    board: any[]
  }
}

export type ListProps = {
  data: Data
  setData: React.Dispatch<React.SetStateAction<Data>>
}

export type TeamsProps = {
  onClick: (type: string, id: string) => void
  data: TeamsData[]
}

export type ProjectsProps = {
  onClick: (type: string, id: string) => void
  data: AllData[]
}

export type UsersProps = {
  onClick: (type: string, id: string) => void
  data: UsersData[]
}

export enum DataType {
  all = 'all',
  team = 'team',
  users = 'users',
}
