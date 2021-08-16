export type TabsProps = {
  children: JSX.Element[]
}

export type TabHeaderProps = {
  children: JSX.Element[]
}

export type TabListProps = {
  children: JSX.Element
}

export type TabItemProps = {
  title: string
  active: boolean
  onClick: () => void
}
