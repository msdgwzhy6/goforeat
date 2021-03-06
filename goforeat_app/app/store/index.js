import {createStore,combineReducers} from 'redux'
// reducers
import {auth,refresh,theme,language,placeSetting,payType,creditCardInfo} from '../reducers/appReducer'

const rootReducer = combineReducers({
  auth,refresh,theme,language,placeSetting,payType,creditCardInfo
});

const store = createStore(rootReducer)

export default store