export type MembersProps = {
  name: string
  img: string
}

export type TeamProps = {
  project: string
  img: string
  bg: string
  members: MembersProps[]
  onClick: () => void
}
