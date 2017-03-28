import { combineReducers } from 'redux'

import dashboard from './screens/Dashboard/reducer'
import user from './userReducer'
import translator from './reducers/translatorReducer'

export default combineReducers({
    dashboard,
    user,
    translator
})