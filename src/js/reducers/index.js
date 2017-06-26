import { combineReducers } from "redux";

import players from "./playersReducer";
import groups from "./groupsReducer";

export default combineReducers({
  players,
  groups
});
