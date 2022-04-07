import { combineReducers } from "redux"

import home from './home.reducer'
import translate from "./translation.reducer"

export default combineReducers({
  home,
  translate
})