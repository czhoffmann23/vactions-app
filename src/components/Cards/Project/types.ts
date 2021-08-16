export type MembersProps = {
  name: string
  img: string
}

export type ProjectProps = {
  project: string
  img: string
  bg: string
  members: MembersProps[]
  onClick: () => void
}
