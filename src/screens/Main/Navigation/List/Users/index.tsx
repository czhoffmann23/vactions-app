import { User } from 'components/Cards'

import { UsersData, UsersProps } from '../../../types'

const Users: React.FC<UsersProps> = ({ onClick, data }) => {
  const handleOnClick = (type: string, id: string) => {
    onClick(type, id)
  }
  return (
    <>
      {data.map((u: UsersData, index: number) => {
        return (
          <User
            key={`${index + 1}`}
            img={u.img}
            name={u.name}
            bg={u.bg}
            active={u.active}
            onClick={() => {
              handleOnClick('users', ` ${index}`)
            }}
          />
        )
      })}
    </>
  )
}

export default Users
