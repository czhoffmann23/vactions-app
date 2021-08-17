import { PROJECTS_MOCKS } from './projects'
import { TEAMS_MOCKS } from './teams'
import { USERS_MOCKS } from './users'

const INIT = {
  all: {
    data: PROJECTS_MOCKS,
    board: [],
  },
  team: {
    data: TEAMS_MOCKS,
    board: [],
  },
  users: {
    data: USERS_MOCKS,
    board: [],
  },
}

export { INIT }
