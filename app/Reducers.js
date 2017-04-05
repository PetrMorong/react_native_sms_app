import { combineReducers } from 'redux'

import dashboard from './screens/Dashboard/reducer'
import user from './screens/Sign/reducer'
import translator from './reducers/translatorReducer'
import inbox from './screens/Inbox/reducer'
import profile from './screens/Profile/reducer'

export default combineReducers({
    dashboard,
    user,
    translator,
    inbox,
    profile
})