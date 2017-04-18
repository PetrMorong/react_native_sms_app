import { combineReducers } from 'redux'

import dashboard from './screens/Dashboard/reducer'
import user from './screens/Sign/reducer'
import translator from './reducers/translatorReducer'
import inbox from './screens/Inbox/reducer'


import profile from './screens/Profile/Profile/reducer';
import baseInformations from './screens/Profile/BaseInformations/reducer';
import changePassword from './screens/Profile/ChangePassword/reducer';
import paymentData from './screens/Profile/PaymentData/reducer';
import contactVerification from './screens/Profile/ContactVerification/reducer';
import storeCreate from './screens/Store/StoreCreate/reducer';
import storeSettings from './screens/Store/StoreSettings/reducer';
import notifications from './screens/Store/Notifications/reducer';
import storeList from './screens/Store/StoreList/reducer';

export default combineReducers({
    dashboard,
    user,
    translator,
    inbox,
    profile,
    baseInformations,
    changePassword,
    paymentData,
    contactVerification,
    storeCreate,
    storeSettings,
    notifications,
    storeList
})