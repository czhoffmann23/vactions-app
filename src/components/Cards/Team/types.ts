export type MembersProps = {
  name: string
  img: string
}

export type TeamProps = {
  team: string
  img: string
  bg: string
  active: boolean
  total: number
  members: MembersProps[]
  onClick: () => void
}
