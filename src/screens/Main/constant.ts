import { PROJECTS_MOCKS } from './projects'
import { TEAMS_MOCKS } from './teams'
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
    data: [],
    board: [],
  },
}

export { INIT }
