export type MembersProps = {
  name: string
  img: string
}

export type ProjectProps = {
  project: string
  img: string
  active: boolean
  bg: string
  members: MembersProps[]
  onClick: () => void
}
