import { combineReducers } from 'redux'

import dashboard from './dashboardReducer'
import user from './userReducer'

export default combineReducers({
    dashboard,
    user
})